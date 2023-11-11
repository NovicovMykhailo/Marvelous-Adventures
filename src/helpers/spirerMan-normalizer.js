export default function isSpiderName(name) {
    let substring = "spider";
    let fixedName;
  if (name.toLowerCase().includes(substring)) {
    fixedName = name.split(' ').join('-');
  }else{
    fixedName = name;
  }
  return fixedName
}

