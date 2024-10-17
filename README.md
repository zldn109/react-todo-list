# 📋React To-do List

## 🤔 학습 자료의 목표경험
- React를 사용해 TodoList를 직접 구현합니다.
- styled-component를 사용해 스타일이 적용된 컴포넌트를 처음부터 만들 수 있습니다.
- 2500개의 할 일 컴포넌트를 렌더링하며 렌더링 지연 현상을 겪고 렌더링 최적화를 통해 이를 해결할 수 있습니다.
- 컴포넌트 가상화를 애플리케이션에 적용할 수 있습니다.
## 1️⃣ Step1 요구사항
### 아이콘은 [react-icons](https://react-icons.github.io/react-icons/)를 사용합니다
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
    MdAdd
### 아래의 링크에 구현된 To-do List를 구현하세요.
  - styled-components 라이브러리를 사용해 style을 입혀야합니다.
  - [🌏 Link](https://greedy-todo-app.netlify.app/)
### 요구 기능은 다음과 같습니다.
  - 삭제/추가/체크 기능이 있어야 하며 App.js(jsx)에서 구현됩니다.
  - todos 배열은 상태로 관리되어야하며 그 내부 객체는 아래의 key값을 가져야합니다.
    ```
    {
      id : i,
      text : `할 일${i}`,
      checked:false,
    }
    ```
### 🎩 아래의 컴포넌트를 제작하고 기능을 지켜주세요.
##### TodoTemplate
    화면을 가운데에 정렬시켜주며, 앱 타이틀(일정관리)를 보여줌. children으로 내부 JSX를 Props로 받아와 렌더링합니다.
##### TodoInsert
    새로운 항목을 입력하고 추가할 수 있는 컴포넌트. state를 통해서 인풋의 상태를 관리합니다.
#### TodoListItem
    각 할 일 항목에 대한 정보를 보여주는 컴포넌트. Todo 객체를 props로 받아와 상태에 따라 다른 스타일의 UI를 보여줍니다.
#### TodoList
    todo배열을 props로 받아 온 후, 여러개의 TodoListItem 컴포넌트로 변환한 후 보여줍니다.

## 2️⃣ Step2 요구사항
- 미션 이전의 요구사항 구현을 완료했다면 아래의 **createBulkTodos()함수**를 todos상태에 초기화하며 선언해주세요.
  ```javascript
  //App.js
  function createBulkTodos(){
  const array = [];
  for(let i=1;i<2500;i++)
    array.push({
        id : i,
        text : `할 일${i}`,
        checked:false,
        });
    }
  return array;
  }
  ```
  ```javascript
  function App() {
  const [todos, setTodos] = useState(createBulkTodos());
  ...some codes...
  }
  ```
  2500개의 데이터를 렌더링하면 애플리케이션은 느려집니다. **왜** 느려지는지 **원인을 분석**하고 그 결과를 **PR**에 적어주세요.
  **[ReactDevTools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko&pli=1)-Profiler**를 이용해서 어떤 컴포넌트가 리렌더링되는지 확인하고 원인을 분석해 **컴포넌트 렌더링 최적화**와 **가상화**를 이뤄내보세요.
  - 컴포넌트 최적화&가상화를 적용하기 이전의 Profiler의 스크린샷과 이후의 스크린샷을 찍어 비교해주세요.
## ✅ 키워드
- React.memo
- useMemo
- useCallback
- useRef
- react-virtualized(가상화 라이브러리)
## 🧙‍♀️ 진행 가이드
- 진행 시간: 4일 내에 완료하는 것을 목표로 합니다.
## 🔗 참고 문서
- [공식문서:memo](https://ko.react.dev/reference/react/memo)
- [공식문서:useMemo](https://ko.react.dev/reference/react/useMemo)
- [공식문서:useCallback](https://ko.react.dev/reference/react/useCallback)
- [공식문서:react-virtualized](https://github.com/bvaughn/react-virtualized/tree/master/docs#documentation)
