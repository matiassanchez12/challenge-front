export function GetCookie(name) {
  const data = GetData(name);
  if (!data) {
    return false;
  }
  const result = data.split("-", 3);
  return { nombre: result[0], email: result[1], id_usuario: result[2] };
}

function GetData(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export function SetCookie(value) {
  document.cookie = `data=${value}; path=/`;
}

export function RemoveCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
