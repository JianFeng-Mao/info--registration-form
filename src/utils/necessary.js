export default function necessary(_list) {
  return _list.isNecessary ? `<span class="necessary">*</span>` : '';
}