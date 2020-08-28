export const filterRole = (data, roleValue) => {
  return data.filter(role => roleValue === "" || role.tags.includes(roleValue));
};

export const filterDifficulty = (data, diffValue) => {
  if (diffValue === "easy") {
    return data.filter(diff => diff.info.difficulty <= 4)
  } else if (diffValue === "medium") {
    return data.filter(diff => (diff.info.difficulty > 4) && (diff.info.difficulty <= 7))
  } else if (diffValue === "hard") {
    return data.filter(diff => diff.info.difficulty >= 8)
  } else {
    return data
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
