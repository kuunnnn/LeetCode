// 2.1mb
func removeElement(nums []int, val int) int {
    i,len:=0,len(nums)
    for i < len {
      if nums[ i ] == val  {
        nums[ i ] = nums[ len - 1 ]
        len--
      } else {
        i++
      }
    }
  return i
}
