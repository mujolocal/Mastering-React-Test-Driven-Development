const today = new Date();
const at = hours => today.setHours(hours, 0);

export const sampleAppointments = [
    {startsAt: at(9), customer:{firstName: 'Charlie', lastName: "Nash", phoneNumber:'(554) 338-2121', stylist:"Maggie", service:"Beard Trim", notes:"yo no necesito el notes para yo tengo la tareia"}},
    {startsAt: at(10), customer:{firstName: 'Frankie', lastName: "Nash", phoneNumber:'(554) 338-2121', stylist:"Maggie", service:"Beard Trim", notes:"yo no necesito el notes para yo tengo la tareia"}},
    {startsAt: at(11), customer:{firstName: 'Casey', lastName: "Nash", phoneNumber:'(554) 338-2121', stylist:"Maggie", service:"Beard Trim", notes:"yo no necesito el notes para yo tengo la tareia"}},
    {startsAt: at(12), customer:{firstName: 'Ashley', lastName: "Nash", phoneNumber:'(554) 338-2121', stylist:"Maggie", service:"Beard Trim", notes:"yo no necesito el notes para yo tengo la tareia"}},
    {startsAt: at(13), customer:{firstName: 'Jordan', lastName: "Nash", phoneNumber:'(554) 338-2121', stylist:"Maggie", service:"Beard Trim", notes:"yo no necesito el notes para yo tengo la tareia"}},
    {startsAt: at(14), customer:{firstName: 'Jay', lastName: "Nash", phoneNumber:'(554) 338-2121', stylist:"Maggie", service:"Beard Trim", notes:"yo no necesito el notes para yo tengo la tareia"}},
    {startsAt: at(15), customer:{firstName: 'Alex', lastName: "Nash", phoneNumber:'(554) 338-2121', stylist:"Maggie", service:"Beard Trim", notes:"yo no necesito el notes para yo tengo la tareia"}},
    {startsAt: at(16), customer:{firstName: 'Jules', lastName: "Nash", phoneNumber:'(554) 338-2121', stylist:"Maggie", service:"Beard Trim", notes:"yo no necesito el notes para yo tengo la tareia"}},
    {startsAt: at(17), customer:{firstName: 'Stevie', lastName: "Nash", phoneNumber:'(554) 338-2121', stylist:"Maggie", service:"Beard Trim", notes:"yo no necesito el notes para yo tengo la tareia"}}
]