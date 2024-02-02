function GetRandomString(num = 5): string {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = lower.toUpperCase();
  const numbers = '0123456789';
  const total = lower + upper + numbers;

  var code = '';
  for (var i = 0; i < num; i++) {
    const index = Math.floor(Math.random() * (total.length - 1));
    const char = total[index];
    code += char;
  }

  return code;
}

export default GetRandomString;
