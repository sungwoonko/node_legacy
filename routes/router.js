const express = require('express')
const router = express.Router();
const viewController = require('../controllers/viewController')
const apiController = require('../controllers/apiController')

/*router to view controllers*/
// 메인 페이지 및 데이터 조회
router.get('/',viewController.getIndexViewPage);

/* router to api controllers*/
// 문의사항 목록 조회
router.get('/api/contact/',apiController.getContacts)

// 문의사항 데이터 삽입
router.post('/api/contact/', apiController.addContact)

// 문의사항 데이터 업데이트
router.put('/api/contact/:id',apiController.updateContact)

// 문의사항 데이터 삭제
router.delete('/api/contact/:id',apiController.deleteContact)



module.exports = router;