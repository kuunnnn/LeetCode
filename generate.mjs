import fs from "fs"
import { dirname, resolve } from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath( import.meta.url );
const __dirname = dirname( __filename );

modifyDirName()
main()

function modifyDirName() {
  const subjectList = fs.readdirSync( "./subject" )
  for ( const subject of subjectList ) {
    for ( const topic of fs.readdirSync( `./subject/${ subject }` ) ) {
      if ( /\|/g.test( topic ) ) {
        const oldPath = resolve( __dirname, `./subject/${ subject }/${ topic }` );
        fs.renameSync( oldPath, oldPath.replace( /\|/g, "I" ) )
      }
    }
  }
}

function main() {
  const writeStream = fs.createWriteStream( "./README.md" )
  writeStream.write( `# LeetCode 解题笔记\n\n` )
  const subjectList = sortTopics( fs.readdirSync( "./subject" ) )
  let nums = [];
  for ( const subject of subjectList ) {
    const list = []
    for ( const topic of fs.readdirSync( `./subject/${ subject }` ) ) {
      const link = `./subject/${ subject }/${ topic }`
      const jsName = fs.readdirSync( link )[ 0 ]
      const formatLink = link.replace( /\s/g, "%20" )
      list.push( `${ topic }](${ formatLink }/${ jsName })\n` )
    }
    nums.push( list.length )
    list.sort( ( a, b ) => parseInt( a, 10 ) - parseInt( b, 10 ) )
    writeStream.write( `\n## ${ subject } ( ${ zeroPadding( list.length ) } 题 )\n\n` )
    for ( const link of list ) {
      writeStream.write( `* [${ link }` )
    }
  }
  writeStream.close()
  subjectList.forEach( ( n, i ) => console.log( "%s共%d道题", n, nums[ i ] ) )
  console.log( "共做%d道题", nums.reduce( ( p, c ) => p += c, 0 ) )
}

/**
 * @param {string[]} subject
 * @return {string[]}
 */
function sortTopics( subject ) {
  swapWrapper( subject, subject.indexOf( "简单" ), 0 )
  swapWrapper( subject, subject.indexOf( "中等" ), 1 )
  swapWrapper( subject, subject.indexOf( "困难" ), 2 )
  swapWrapper( subject, subject.indexOf( "面试题" ), 3 )
  swapWrapper( subject, subject.indexOf( "剑指Offer" ), 4 )
  return subject
}


function swapWrapper( array, i, j ) {
  if ( i === -1 || j === -1 ) return
  swap( array, i, j )
}

function swap( array, i, j ) {
  const temp = array[ i ]
  array[ i ] = array[ j ]
  array[ j ] = temp
}

function zeroPadding( num ) {
  return num < 10 ? "0" + num : "" + num
}
