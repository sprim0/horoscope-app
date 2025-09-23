// user clicks in input box and then enters a number in 'days in month'
//user clicks in input box for 'months of the year' and types in a month
// user then presses button 'Enter'
// User expects to see the corresponding zodiac sign
// computer shows accurate zodiac sign

// when user clicks on <button> 
// I will define information from array of 'month' and 'days' to determine user's horoscope i.e January is Aquarias etc. 
// Take info from day and month from the input boxes
// Determine horoscope of user: 
// Aries (March 21 – April 19) dob<=3.21 &&  dob>=4.19 
// Taurus (April 20 – May 20)
// Gemini (May 21 – June 20)
// Cancer (June 21 – July 22)
// Leo (July 23 – August 22)
// Virgo (August 23 – September 22)
// Libra (September 23 – October 22)
// Scorpio (October 23 – November 21)
// Sagittarius (November 22 – December 21)
// Capricorn (December 22 – January 19)
// Aquarius (January 20 – February 18)
// Pisces (February 19 – March 20)

// Take information in array to check user's horoscope
// convert months to numbers i.e march to '3'
// convert days into decimals i.e march 21 to 3.21
// divide by 100
// make user's text result the same for uppercase or lowercase text
// display user's horoscope in <h2>

document.querySelector('button').addEventListener('click', showHoroscope)

function showHoroscope(){
    let days = document.querySelector('#days').value
    console.log (days)
    let months = document.querySelector('#month').value
    console.log (months)
    // changed dates and months to numbers to be able to compare number easily
    let dob = days / 100 + parseInt (months)
    console.log (dob) 

    if (dob>=3.21 && dob<=4.19){
        window.alert('aries')
    }else if (dob >=4.20 && dob<=5.20){
        window.alert('taurus')
    }else if (dob >=5.21 && dob<=6.20){
        window.alert('gemini')   
    }else if (dob >=6.21 && dob<=7.22){
        window.alert('cancer')
    }else if (dob >=7.23 && dob<=8.22){
        window.alert('leo')
    }else if (dob >=8.23 && dob<=9.22){
        window.alert('virgo')    
    }else if (dob >=9.23 && dob<=10.22){
        window.alert('libra')
    }else if (dob >=10.23 && dob<=11.21){
        window.alert('scorpio')
    }else if (dob >=11.22 && dob<=12.21){
        window.alert('sagittarius')
    }else if (dob >=12.22 && dob<=1.19){
        window.alert('capricorn')
    }else if (dob >=1.20 && dob<=2.18){
        window.alert('aquarius')
    }else if (dob >=2.19 && dob<=3.20){
        window.alert('pisces')
    }
}
// completed with the help of Michael Kazin during community hours