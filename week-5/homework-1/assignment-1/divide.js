export default function divide(num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    throw new Error("Invalid parameter");
  } else if (num2 === 0) {
    throw new Error("Divide by zeroo");
  }

  return num1 / num2; 
}