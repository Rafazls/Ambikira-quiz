function handleTelefone(text) {
  text = text.replace(/\D/g, "");
  text = text.replace(/^(\d{2})(\d)/g, "($1)$2");
  text = text.replace(/(\d)(\d{4})$/, "$1-$2");
  return text;
}
function handleCPF(text) {
  text = text.replace(/\D/g, "");
  text = text.replace(/(\d)(\d{2})$/g, "$1-$2");
  text = text.replace(/(?=(\d{3})+(\D))\B/g, ".");
  return text;
}
export { handleCPF, handleTelefone };
