let x: [string, number]

x = ['hey', 11]

// 밑의 코드는 에러 난다
// x = [11, 'hey']

// x[2] 는 정해준 타입에서 요소의 개수가 초과되는 범위의 인덱스를 조회
// undefined 로 타입이 지정된다.
// x[2]= 'world']

const personInfo: [string, number] = ["je", 11]

// 튜플이기 때문에 순서에 맞춰서 first 는 타입이 string, second 는 number 로 지정된다
const [first, second] = personInfo

