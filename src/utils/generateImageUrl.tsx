export const generatePreview = (entity: String) => {
  // return `https://img-s-msn-com.akamaized.net/tenant/amp/entityid/${entity}?w=204&h=241&q=60&m=6&f=jpg&x=314&y=195&u=t`;
  return `https://img-s-msn-com.akamaized.net/tenant/amp/entityid/${entity}?w=300&h=174&q=60&m=6&f=jpg&x=1035&y=1347&u=t`;
  // return `https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB12xWpF?w=300&h=174&q=60&m=6&f=jpg&x=351&y=246&u=t`;
};

export const generateProviderIcon = (entity: String) => {
  return `https://img-s-msn-com.akamaized.net/tenant/amp/entityid/${entity}?w=16&h=16`;
};
//
