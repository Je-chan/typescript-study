function helloBasic<T, U>(msg: T, comment: U): T {
  return msg
}

// T = string 이 됐고
// msg = string 이 돼야 하고
// return 되는 값도 string 이 나와야 한다
helloBasic<string, number>('Je', 12);

// T 는 type 을 추론하는데 Number 로 추론하지 않고 36 그 자체로 추론한다
helloBasic(12, 'Je');