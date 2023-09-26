function solution(chicken) {
  var answer = 0;
  let coupon = chicken;
  let lcoupon = 0;
  while (coupon > 9) {
    lcoupon = coupon % 10; // 남는 쿠폰
    answer += Math.floor(coupon / 10); // 서비스로 먹는 치킨 개수 저장
    coupon = Math.floor(coupon / 10) + lcoupon;
  }
  return answer;
}
