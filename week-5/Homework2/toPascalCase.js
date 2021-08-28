export default function toPascalCase(title) {
  return !title 
  ? ""
  : title.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}