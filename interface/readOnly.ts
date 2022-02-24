interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p8_1: Person8 = {
  name: 'Je',
  gender: 'male'
}

// 아래의 코드는 에러를 발생시킨다
// p8_1.gender = 'female'