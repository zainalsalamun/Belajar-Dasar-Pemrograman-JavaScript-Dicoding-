arrayObject =[
    {
        name: 'Sabrina',
        age: 20,
        address: 'Jl. Raya Kedung Baruk No. 27, Surabaya',
        hobbies: ['Reading', 'Writing', 'Coding'],
        isMarried: false,
        schoolList: [
            {
                name: 'SDN Kedung Baruk 1',
                yearIn: 2005,
                yearOut: 2011,
                major: null
            },
            {
                name: 'SMPN 11 Surabaya',
                yearIn: 2011,
                yearOut: 2014,
                major: null
            },
            {
                name: 'SMAN 11 Surabaya',
                yearIn: 2014,
                yearOut: 2017,
                major: 'IPA'
            },
            {
                name: 'Universitas Airlangga',
                yearIn: 2017,
                yearOut: 2021,
                major: 'S1 Teknik Informatika'
            }
        ],
        skills: [
            {
                skillName: 'HTML',
                level: 'advanced'
            },
            {
                skillName: 'CSS',
                level: 'advanced'
            },
            {
                skillName: 'Javascript',
                level: 'advanced'
            },
            {
                skillName: 'PHP',
                level: 'beginner'
            },
            {
                skillName: 'MySQL',
                level: 'beginner'
            }
        ],
        interestInCoding: true
    }
]

arrayObject.forEach((element) => {
    console.log(element);
});
arrayObject.map((element) => {
    console.log(element);
});
arrayObject.filter((element) => {
    console.log(element);
});
arrayObject.reduce((total, currentValue) => {
    console.log(total + currentValue);
});
arrayObject.find((element) => {
    console.log(element);
});