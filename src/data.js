export const filterRole = (data, roleValue) => {
  return data.filter(role => role.tags.includes(roleValue));
};

export const filterDifficulty = {
  easy:(data, diffValue) => {
    return data.filter(diff => diff.info.difficulty <= diffValue)
  },
  medium:(data, diffValue1, diffValue2) => {
    return data.filter(diff => (diff.info.difficulty >diffValue1) && (diff.info.difficulty <=diffValue2))
  },
  hard:(data, diffValue) => {
    return data.filter(diff => diff.info.difficulty >= diffValue)
  }
};

export const filterName = (data, nameValue) => {
  return data.filter(search => search.name.includes(nameValue));
};

export const calc = (total, filterValue) => {
  let result = ""
  result += parseInt(filterValue*100/total)
  return result 
}