// Paste this in router
// Do not change the property names if unnecessary

import Meta from "vue-meta";

Vue.use(Meta, {
  // keyName: Change the name of component's option (ex: 'head')
  // 컴포넌트 옵션 이름 변경 (예: 'head')
  keyName: "metaInfo",
  // attribute: Additional property name to observe tags
  // 태그를 관찰하기 위해 추가하는 속성 이름 vue-meta
  attribute: "data-vue-meta",
  // ssrAttrivute: Tells vue-meta that the meta info is already rendered on the server
  // 메타 정보가 이미 서버에서 렌더링 되었음을 vue-meta에 알리는 속성 이름
  ssrAttribute: "data-vue-meta-server-rendered",
  // tagIDKeyName: Used for deciding between Add or overwritting tag
  // vue-meta가 태그를 덮어 쓸지 또는 태그를 추가할지 결정하기 위해 사용하는 속성 이름
  tagIDKeyName: "vmid",
});
