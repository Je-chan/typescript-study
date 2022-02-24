// function
type EatType = (food: string) => void

interface IEat {
  (food: string): void;
}

// Array
type PersonList = string[]

interface IPersonList {
  // 배열은 index 가 number 
  [index: number]: string
}

// intersection

interface ErrorHandling {
  succesS: boolean;
  error?: {message: string}
}

interface ArtistData {
  artists: {name: string}[]
}


type ArtistsResponseType = ArtistData & ErrorHandling

interface IArtistReponse extends ArtistData, ErrorHandling {}

let art: ArtistsResponseType
let anotherArt : IArtistReponse

// union Types
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

type PetType = Bird | Fish

// 아래의 코드들은 에러가 발생함. | 으로 하나의 타입만 작성한다면 alias 사용할 것
// interface IPet extends PetType {}
// class Pet implements PetType {}

// Declaration Mergin - interface
// 인터페이스명이 똑같은 게 두 가지 이상이 있으면 차후에 하나로 합쳐져서 사용할 수 있다
// type alias 는 불가능
interface MergingInterface {
  a: string
}

interface MergingInterface {
  b: string
}

let mi: MergingInterface