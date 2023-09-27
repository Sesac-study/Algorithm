
// 치킨을 시켜먹으면 쿠폰을 1장 받음.
// 10장의 쿠폰을 모으면 치킨 1마리를 무료로 받음.
// 무료로 받은 치킨에도 1장의 쿠폰이 발급됨.
// 받을 수 있는 최대 서비스 치킨의 수를 구하는 것.

// 주어진 쿠폰 수를 가지고 최대한의 치킨을 시키고, 
// 그에 따른 추가 쿠폰을 계산
// 추가 쿠폰을 이용하여 또 다른 치킨을 시키고, 이 과정을 반복

function solution(chicken) {
    // 받을 수 있는 치킨 수 초기화
    let serviceChicken = 0;
    // 현재 보유한 쿠폰 수 초기화
    let coupons = chicken;
  
    while (coupons >= 10) {
      // 치킨 주문 및 추가 쿠폰 발급
      const orderedChicken = Math.floor(coupons / 10); // 주문한 치킨 수
      serviceChicken += orderedChicken; // 서비스 치킨 추가
      coupons -= orderedChicken * 10; // 주문한 치킨으로 사용한 쿠폰 수 감소
      coupons += orderedChicken; // 추가로 발급된 쿠폰 수 추가
    }
  
    // 최종 결과 반환
    return serviceChicken;
  }
  
