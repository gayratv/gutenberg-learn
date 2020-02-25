const strip_tags_func = (input, allowed) => {
  allowed = (((allowed || '') + '')
  .toLowerCase()
  .match(/<[a-z][a-z0-9]*>/g) || [])
  .join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)


  let tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
  
  let commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

  function replacer(match, p0, p1) {
     return allowed.indexOf('<' + p0.toLowerCase() + '>') > -1 ? match : '';
  };
  
  let prom1 =  input.replace(commentsAndPhpTags, '');
  return prom1.replace(tags, replacer);
 };

export default strip_tags_func;