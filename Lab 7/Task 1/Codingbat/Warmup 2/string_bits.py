def string_bits(str):
  new = ""
  for i in range (len(str)):
    if(i % 2 == 0):
      new +=str[i]

  return new