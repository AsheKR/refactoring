/*  
컬렉션을 순회할 때 대부분 반복문을 사용한다. 하지만 파이프라인을 이용하면 논리를 이해하기 더 쉬워진다.
객체가 파이프라인을 따라 흐르며 어떻게 처리되는지를 읽을 수 있기 때문이다.
*/

export function acquireData(input: string) {
  const lines = input.split('\n')
  let firstLine = true
  const result = []
  for (const line of lines) {
    if (firstLine) {
      firstLine = false
      continue
    }
    if (line.trim() == '') continue
    const record = line.split(',')
    if (record[1].trim() === 'India') {
      result.push({city: record[0].trim(), phone: record[2].trim()})
    }
  }
  return result
}
