# shopping_list

**1. 기능**
  1. shopping list 추가
  2. shopping list 삭제

**2. 상세 설명**

  -----입력-----
  1. 사용자가 text 입력
  2. '+' 버튼 클릭
  3. newList 함수 실행

  -----삭제-----
  
  1. list 우측 쓰레기통 아이콘 클릭

**3. 해결한 에러사항**
  --shopping list 추가 기능--
  1. shopping list를 추가할 때 list 외에 text가 한 줄 더 추가되는 현상
    =>  Node.textContent 의 오용
    =>  const add = document.querySelector('.shoppingList').textContent = addText;
  
**4. 개선할 점**
1. list의 일정 개수가 넘어갈 시 '+' 버튼 아래로 list가 내려가는 현상
2. click 외에도 enter키를 이용한 입력
3. text 입력 후 다음 입력을 위한 input창의 text 지우기
