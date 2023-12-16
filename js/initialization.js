//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Air Blade 2010',
            img: './assets/img/products/air-blade-2010.jpg',
            category: 'Air Blade',
            price: 20000000,
            desc: 'sth'
        },
        {
            id: 2,
            status: 1, 
            title: 'Air Blade 2015',
            img: './assets/img/products/air-blade-2015.jpg',
            category: 'Air Blade',
            price: 18000000,
            desc: 'sth'
        },
        {
            id: 3,
            status: 1, 
            title: 'Air Blade 2017',
            img: './assets/img/products/air-blade-2017.jpg',
            category: 'Air Blade',
            price: 18000000,
            desc: 'sth'
        },
        {
            id: 4,
            status: 1, title: 'Air Blade 2021',
            img: './assets/img/products/air-blade-2021.png',
            category: 'Air Blade',
            price: 6990000,
            desc: 'sth'
        },
        {
            id: 5,
            status: 1, 
            title: 'Air Blade 2022',
            img: './assets/img/products/air-blade-2022.png',
            category: 'Air Blade',
            price: 28000000,
            desc: 'sth'
        },

        {
            id: 6,
            status: 1, 
            title: 'Exciter 2005',
            img: './assets/img/products/exciter-2005.png',
            category: 'Món mặn',
            price: 54000000,
            desc: 'sth'
        },

        {
            id: 7,
            status: 1, 
            title: 'Exciter 2007',
            category: 'Exciter',
            img: './assets/img/products/exciter-2007.jpg',
            price: 34000000,
            desc: 'sth.'
        },

        {
            id: 8,
            status: 1, 
            title: 'Exciter 2009',
            img: './assets/img/products/exciter-2009.jpg',
            category: 'Exciter',
            price: 14000000,
            desc: 'sth'
        },

        {
            id: 9,
            status: 1, 
            title: 'Exciter 2011',
            category: "Exciter",
            img: './assets/img/products/exciter-2011.jpg',
            price: 34000000,
            desc: 'sth',
        },
        {
            id: 10,
            status: 1, 
            title: 'Exciter 2015',
            category: "Exciter",
            img: './assets/img/products/exciter-2015.jpg',
            price: 25000000,
            desc: 'sth',
        },
        {
            id: 11,
            status: 1, 
            title: 'Exciter 2019',
            category: 'Exciter',
            img: './assets/img/products/exciter-2019.jpg',
            price: 60000000,
            desc: 'sth'
        },
        {
            id: 12,
            status: 1, 
            title: 'Exciter 2020',
            img: './assets/img/products/exciter-2020.jpg',
            category: 'Exciter',
            price: 14000000,
            desc: 'sth'
        },
        {
            id: 13,
            status: 1, 
            title: 'Chả rươi (100gr)',
            img: './assets/img/products/thit_nuong.jpg',
            category: 'Món mặn',
            price: 60000,
            desc: 'Chả rươi luôn mang đến hương vị khác biệt và "gây thương nhớ" hơn hẳn so với các loại chả khác. Rươi béo càng ăn càng thấy ngậy. Thịt thơm quyện mùi thì là và vỏ quýt rất đặc sắc. Chắc chắn sẽ là một món ăn rất hao cơm'
        },
        {
            id: 14,
            status: 1, 
            title: 'Lead 2009',
            img: './assets/img/products/lead-2009.jpg',
            category: 'Lead',
            price: 60000000,
            desc: 'sth'
        },
        {
            id: 15,
            status: 1, 
            title: 'Lead 2010',
            img: './assets/img/products/lead-2010.jpg',
            category: 'Lead',
            price: 60000000,
            desc: 'sth'
        },
        {
            id: 16,
            status: 1, 
            title: 'Lead 2011',
            img: './assets/img/products/lead-2011.jpg',
            category: 'Lead',
            price: 60000000,
            desc: 'sth'
        },
        {
            id: 17,
            status: 1, 
            title: 'Lead 2012',
            img: './assets/img/products/lead-2012.jpg',
            category: 'Lead',
            price: 60000000,
            desc: 'sth'
        },
        {
            id: 18,
            status: 1, 
            title: 'Lead 2019',
            img: './assets/img/products/lead-2019.jpg',
            category: 'Lead',
            price: 60000000,
            desc: 'sth'
        },
        {
            id: 19,
            status: 1, 
            title: 'Bánh cookie dừa',
            img: './assets/img/products/lead-2020.jpg',
            category: 'Lead',
            price: 13000000,
            desc: 'sth'
        },
        {
            id: 20,
            status: 1, 
            title: 'Lead 2023',
            img: './assets/img/products/lead-2023.jpg',
            category: 'Lead',
            price: 13000000,
            desc: 'sth'
        },
        {
            id: 21,
            status: 1, 
            title: 'Raider 2022',
            category: 'Raider',
            img: './assets/img/products/raider-2022.png',
            price: 55000000,
            desc: 'sth'
        },
        {
            id: 22,
            status: 1, 
            title: 'Raider R150',
            category: 'Raider',
            img: './assets/img/products/raider-R150.png',
            price: 55000000,
            desc: 'Tôm được chiên vàng giòn bên ngoài, bên trong thịt tôm vẫn mềm, kết hợp cùng sốt bơ tỏi thơm nức . Tôm tươi được Bếp Hoa chiên theo bí quyết riêng nên phần thịt tôm bên trong sẽ có hương vị thơm ngon đặc biệt, sốt bơ tỏi béo ngậy hấp dẫn. Ăn kèm bánh mỳ rất hợp'
        },

        {
            id: 23,
            status: 1, 
            title: 'Wave Alpha',
            category: 'Wave',
            img: './assets/img/products/wave-alpha.png',
            price: 51000000,
            desc: 'sth'
        },

        {
            id: 24,
            status: 1, 
            title: 'Wave RSX',
            img: './assets/img/products/wave-rsx.png',
            category: 'Wave',
            price: 35000000,
            desc: 'sth'
        },
        {
            id: 25,
            status: 1, 
            title: 'Wave S/RS',
            img: './assets/img/products/wave-srs.jpg',
            category: 'Wave',
            price: 35000000,
            desc: 'sth.'
        },

        {
            id: 26,
            status: 1, 
            title: 'Winner 2017',
            category: 'Winner',
            img: './assets/img/products/winner-2017.jpg',
            price: 45000000,
            desc: 'sth'
        },

        {
            id: 27,
            status: 1, 
            title: 'Winner 2018',
            category: 'Winner',
            img: './assets/img/products/winner-2018.jpg',
            price: 52000000,
            desc: 'sth.'
        },

        {
            id: 28,
            status: 1, 
            title: 'Winner 2019',
            category: 'Winner',
            img: './assets/img/products/winner-2019.jpg',
            price: 35000000,
            desc: 'sth'
        },
        
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Nguyễn Công Huấn",
            phone: "nchuan1802",
            password: "123456",
            address: 'https://github.com/nchuan1802',
            email: 'musicanime2501@gmail.com',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Nguyễn Công Huấn",
            phone: "0123456789",
            password: "123456",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();