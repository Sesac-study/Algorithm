function solution(chicken) {
  const coupon = Math.floor(chicken / 10);
  if (coupon > 0) {
    return coupon + solution(coupon + (chicken % 10));
  } else {
    return 0;
  }
}
