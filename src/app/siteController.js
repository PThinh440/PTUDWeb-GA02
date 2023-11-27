class siteController {
    //[GET] /
    index(req, res) {
      res.render('admin/index');
    }

    //[GET] /protected
    protected(req, res) {
      res.render('admin/protected');
    }
  
    //[GET] /registration
    registration(req, res) {
      res.render('admin/registration');
    }
  
    //[GET] /login
    login(req, res) {
      res.render('admin/login', { layout: 'admin/login' });
    }
  }
  
  module.exports = new siteController;