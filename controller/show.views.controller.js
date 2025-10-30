const showMainPage = (req,res)=>{
    res.render('index');
}

 const showAllStaticPages = (req, res) => {
  const page = req.params.page || 'index';
  res.render(page, (err, html) => {
    if (err) return res.status(404).send('Page not found');
    res.send(html);
  });
};

// ✅ export all at once
export {
  showMainPage,
  showAllStaticPages
};