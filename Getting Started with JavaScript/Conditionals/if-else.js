{
  let num = 0
  if (num > 3) console.log('Number is greater then 3')
  // in case of a single line , there is no need to provide blocks to the if-else
  else console.log('number is smaller')
  // Email verification
  //Length of the email > 11
  // after . only 2 or 3 characters are allowed
  // minimum three characers  between @ and .
  const email = prompt('Enter you Email: ')
  const emailLength = email.length
  const dotIndex = email.lastIndexOf('.')
  const atIndex = email.lastIndexOf('@')
  const lastIndex = emailLength - 1
  if (
    emailLength < 11 ||
    lastIndex - dotIndex < 2 ||
    lastIndex - dotIndex > 3 ||
    dotIndex - atIndex < 3
  ) {
    console.log(`Email ${email} is a invalid Email.`)
    alert(`Email ${email} is an invalid Email.`)
  } else {
    console.log(`Email ${email} is a valid Email.`)
    alert(`Email ${email} is an valid Email.`)
}
}
