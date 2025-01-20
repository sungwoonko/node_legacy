const getIndexViewPage = (req,res) => {
    res.render('index')
}

const getBlogViewPage = (req,res) => {
    res.render('blog')
}

const getMainPage = (req,res) => {
    res.render('index')
}

const getContactPage = (req,res) => {
    res.render('contact')
}

// 모델앤뷰 컨트롤러는 데이터가 필요하기 때문에 모델을 주입받아야함
const contactModel = require('../models/contactModel') 

// 데이터를 템플릿에 동적으로 바인딩할 필요가 있는 경우 모델앤뷰 컨트롤러
const getContactListViewPageWithData = (req, res) => {
    contactModel.getContacts((err, result) => {
        if (err) {
            console.error('데이터 조회 중 에러 발생', err);
            return res.status(500).send('내부 서버 오류');
        }
        res.render('contactList', { lists: result });
    });
};


module.exports = {
    getIndexViewPage,
    getBlogViewPage,
    getMainPage,
    getContactPage,
    getContactListViewPageWithData
}