// Charakterliste (Stand Version 3.4) und Element-Farben

const D=`Rover|Spectro|Sword|5
Carlotta|Glacio|Pistols|5
Hiyuki|Glacio|Sword|5
Lucilla|Glacio|Rectifier|5
Lingyang|Glacio|Gauntlets|5
Zhezhi|Glacio|Rectifier|5
Sanhua|Glacio|Sword|4
Baizhi|Glacio|Rectifier|4
Youhu|Glacio|Gauntlets|4
Aemeath|Fusion|Sword|5
Denia|Fusion|Rectifier|5
Mornye|Fusion|Broadblade|5
Galbrena|Fusion|Pistols|5
Lupa|Fusion|Broadblade|5
Brant|Fusion|Sword|5
Changli|Fusion|Sword|5
Encore|Fusion|Rectifier|5
Chixia|Fusion|Pistols|4
Mortefi|Fusion|Pistols|4
Augusta|Electro|Broadblade|5
Xiangli Yao|Electro|Gauntlets|5
Yinlin|Electro|Rectifier|5
Calcharo|Electro|Broadblade|5
Rebecca|Electro|Pistols|5
Lumi|Electro|Broadblade|4
Yuanwu|Electro|Gauntlets|4
Sigrika|Aero|Gauntlets|5
Qiuyuan|Aero|Sword|5
Iuno|Aero|Gauntlets|5
Cartethyia|Aero|Sword|5
Ciaccona|Aero|Pistols|5
Jiyan|Aero|Broadblade|5
Jianxin|Aero|Gauntlets|5
Aalto|Aero|Pistols|4
Yangyang|Aero|Sword|4
Luuk Herssen|Spectro|Gauntlets|5
Lynae|Spectro|Pistols|5
Zani|Spectro|Gauntlets|5
Phoebe|Spectro|Rectifier|5
Shorekeeper|Spectro|Rectifier|5
Jinhsi|Spectro|Broadblade|5
Verina|Spectro|Rectifier|5
Lucy|Spectro|Pistols|5
Chisa|Havoc|Broadblade|5
Phrolova|Havoc|Rectifier|5
Cantarella|Havoc|Rectifier|5
Roccia|Havoc|Gauntlets|5
Camellya|Havoc|Sword|5
Danjin|Havoc|Sword|4
Taoqi|Havoc|Broadblade|4`.split('\n').map(l=>{const[n,e,w,r]=l.split('|');return{n,e,w,r}});
const EC={Glacio:'#3b8bd4',Fusion:'#d85a30',Electro:'#7f77dd',Aero:'#1d9e75',Spectro:'#ba7517',Havoc:'#a3326a'};
