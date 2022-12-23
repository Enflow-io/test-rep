import Car from "../../../interfaces/car.interface";

const DATA: Car[] = [
    {
        title: "BMW X7 30d I (G07)",
        price: '10 600 000',
        pics: [
            {
                url: '/mock/bmw/bmw1.webp'
            },
            {
                url: '/mock/bmw/bmw2.webp'
            },
            {
                url: '/mock/bmw/bmw3.webp'
            }
        ]
    }, 
     {
        title: "BMW X7 40d I (G07)",
        price: '12 600 000',
        pics: [
            {
                url: '/mock/bmw/bmw21.webp'
            },
            {
                url: '/mock/bmw/bmw22.webp'
            },
            {
                url: '/mock/bmw/bmw23.webp'
            }
        ]
    },   
     {
        title: "Audi A7 45 TFSI II (4K) рестайлинг",
        price: '7 600 000',
        pics: [
            {
                url: '/mock/bmw/audi1.webp'
            },
            {
                url: '/mock/bmw/audi2.webp'
            },
            {
                url: '/mock/bmw/audi3.webp'
            }
        ]
    },   
     {
        title: "Audi A7 45 TFSI II (4K) рестайлинг, машина с очень длинным названием во много строк",
        price: '7 600 000',
        pics: [
            {
                url: '/mock/bmw/audi1.webp'
            },
            {
                url: '/mock/bmw/audi2.webp'
            },
            {
                url: '/mock/bmw/audi3.webp'
            }
        ]
    }
];

const getData = (count: number) => {
    let data = []
    while (data.length < count) {
        data.push(...DATA);
    }
    const finalData = data.slice(0, count);
    return finalData
}

export default getData;