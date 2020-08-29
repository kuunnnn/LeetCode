import fs from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import topic from "./update-data.js";

const priority = [ "简单", "中等", "困难", "面试题", "剑指Offer" ];
const __filename = fileURLToPath( import.meta.url );
const __dirname = dirname( __filename );
const args = process.argv.slice( 2 );
const commands = [ "update-readme", "update-change" ];
if ( args.length === 0 || !commands.includes( args[ 0 ] ) ) {
  throw Error( "Unknown command!" );
} else {
  callCommand( args[ 0 ] );
}

function callCommand( command ) {
  switch ( command ) {
    case "update-readme":
      return updateReadMeFile();
    case "update-change":
      return updateChangeLogFile();
    default:
      throw Error( "Unknown command!" );
  }
}

/**
 * 更新 CHANGELOG.md 文件
 */
function updateChangeLogFile() {
  const count = topic.size || 0;
  const problemList = getTopicList();
  if ( count === problemList.size ) {
    return;
  }
  console.log( "新增 %d 题!", problemList.size - count );
  const buffer = fs.readFileSync( "./CHANGELOG.md" );
  const writeStream = fs.createWriteStream( "./CHANGELOG.md" );
  writeStream.write( buffer );
  const num = problemList.size - count;
  writeStream.write( `\n## <small>新增${ num }题(${ todayTime() })</small>\n` );
  writeStream.write( "\n" );
  const updateData = diff( topic, problemList );
  for ( let subTopic of updateData ) {
    writeStream.write( `\n**${ subTopic.title }**\n\n` );
    subTopic.children.forEach( ( val ) => writeStream.write( `- ${ val }\n` ) );
  }
  writeStream.close();
  const jsonString = "export default" + JSON.stringify( problemList, null, 2 );
  fs.writeFileSync( "./update-data.js", jsonString );
}

/**
 *
 * @param {{size:number, topic: Topic[]}} topic
 * @param {{size:number, topic: Topic[]}} topic2
 * @return {Topic[]}
 */
function diff( topic, topic2 ) {
  if ( topic.size === topic2.size ) {
    return [];
  }
  const f = ( list, title ) => list.find( ( v ) => v.title === title );

  function c( t, t1 ) {
    if ( !t ) return t1;
    if ( !t1 ) return t;
    const hashSet = new Set();
    t.children.forEach( ( r ) => hashSet.add( r ) );
    const children = [];
    t1.children.forEach( ( r ) => (hashSet.has( r ) ? null : children.push( r )) );
    return new Topic( t.title, children );
  }

  return priority.map( ( e ) => c( f( topic.topic, e ), f( topic2.topic, e ) ) );
}

/**
 * 获取今天是时间 YYYY-MM-DD
 * @return {string}
 */
function todayTime() {
  const today = new Date();
  const month = zeroPadding( today.getMonth() + 1 );
  const date = zeroPadding( today.getDate() );
  return `${ today.getFullYear() }-${ month }-${ date }`;
}

/**
 * 获取 subject 目录下的题列表
 * @return {{size: number, topic: Topic[]}}
 */
function getTopicList() {
  const subjectList = sortTopics( fs.readdirSync( "./subject" ) );
  const topic = [];
  let size = 0;
  for ( const subject of subjectList ) {
    const linkList = [];
    if ( subject === ".DS_Store" ) {
      continue
    }
    for ( const topic of fs.readdirSync( `./subject/${ subject }` ) ) {
      const link = `./subject/${ subject }/${ topic }`;
      if ( topic === ".DS_Store" ) {
        continue
      }
      const jsName = fs.readdirSync( link )[ 0 ];
      const formatLink = link.replace( /\s/g, "%20" );
      linkList.push( `[${ topic }](${ formatLink }/${ jsName })` );
    }
    size += linkList.length;
    linkList.sort( ( a, b ) => parseInt( a, 10 ) - parseInt( b, 10 ) );
    topic.push( new Topic( subject, linkList ) );
  }

  return { topic, size };
}

/**
 * 用于标记题目的层级
 * @param {string} title
 * @param {string[]} children
 * @constructor
 */
function Topic( title, children ) {
  this.title = title;
  this.children = children || [];
}

/**
 * 更新 README.md 文件
 */
function updateReadMeFile() {
  const writeStream = fs.createWriteStream( "./README.md" );
  writeStream.write( `# LeetCode 解题笔记\n\n` );
  const topicList = getTopicList();
  for ( let topic of topicList.topic ) {
    const title = `\n## ${ topic.title } ( ${ zeroPadding(
      topic.children.length
    ) } 题 )\n\n`;
    writeStream.write( title );
    for ( const link of topic.children ) {
      writeStream.write( `- ${ link }\n` );
    }
  }
  writeStream.close();
  console.log( "共做%d道题", topicList.size );
}

/**
 * 将目录名的 | 转换为 I
 */
function modifyDirName() {
  const subjectList = fs.readdirSync( "./subject" );
  for ( const subject of subjectList ) {
    for ( const topic of fs.readdirSync( `./subject/${ subject }` ) ) {
      if ( /\|/g.test( topic ) ) {
        const oldPath = resolve( __dirname, `./subject/${ subject }/${ topic }` );
        fs.renameSync( oldPath, oldPath.replace( /\|/g, "I" ) );
      }
    }
  }
}

/**
 * @param {string[]} subject
 * @return {string[]}
 */
function sortTopics( subject ) {
  priority.forEach( ( v, i ) => swap2( subject, subject.indexOf( v ), i ) );
  return subject;
}

/**
 * 交换数组的值
 * @param {*[]} array
 * @param {number} i
 * @param {number} j
 */
function swap2( array, i, j ) {
  if ( i === -1 || j === -1 ) return;
  swap( array, i, j );
}

/**
 * 交换数组的值
 * @param {*[]} array
 * @param {number} i
 * @param {number} j
 */
function swap( array, i, j ) {
  const temp = array[ i ];
  array[ i ] = array[ j ];
  array[ j ] = temp;
}

/**
 * 小于 10 补零
 * @param {number} num
 * @return {string}
 */
function zeroPadding( num ) {
  return num < 10 ? "0" + num : "" + num;
}
