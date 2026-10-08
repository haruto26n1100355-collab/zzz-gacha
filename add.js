// キャラ名 → 属性マッピング（日本語名・英語名両対応）
const CHAR_ATTR = {
  // Electric
  'アンビー':1,'安比':1,'anby':1,
  'セス':1,'seth':1,
  'チンイー':1,'qingyi':1,'青衣':1,
  'リナ':1,'rina':1,
  'グレース':1,'grace':1,
  'トリガー':1,'trigger':1,
  'ヤナギ':1,'yanagi':1,'柳':1,
  'ハルマサ':1,'harumasa':1,'悠真':1,
  'プルクラ':1,'pulchra':1,
  '0号アンビー':1,'soldier 0 anby':1,'anby soldier 0':1,'ソルジャー0':1,
  'シード':1,'seed':1,
  'アンドー':1,'ando':1,
  'シーシィア':1,'cissia':1,
  'クラレッタ':1,'くられった':1,'kuraretta':1,
  // Fire
  'ベン':2,'ben':2,
  'ルーシー':2,'lucy':2,
  'ソルジャー11':2,'soldier 11':2,'ソルジャー１１':2,'11号':2,
  'バーニス':2,'burnice':2,
  'ライター':2,'ライト':2,'lighter':2,
  'エヴリン':2,'イヴリン':2,'evelyn':2,
  'クレタ':2,'claret':2,
  '盤岳':2,'banyue':2,
  '狛野真斗':2,'真斗':2,'狛野':2,'まなと':2,'manato':2,
  'オルペウス':2,'orphie':2,'orphie & magus':2,
  '橘福福':2,'福福':2,'フーフー':2,'ju fufu':2,
  // Ice
  'エレン':3,'ellen':3,
  'ライカン':3,'lycaon':3,
  'ミヤビ':3,'miyabi':3,
  'ザオ':3,'zhao':3,
  'イドリー':3,'yidhari':3,
  'ヒューゴ':3,'hugo':3,
  'プロメイア':3,'promeia':3,
  '蒼角':3,'soukaku':3,'soukaku2':3,
  '星見雅':7,'雅':7,'miyabi':7,
  // Physical
  'ネコマタ':4,'nekomata':4,'猫又':4,
  'パイパー':4,'piper':4,
  'コリン':4,'カリン':4,'corin':4,
  'ビリー':4,'billy':4,
  'ジェーン':4,'jane':4,'ジェーン・ドゥ':4,'jane doe':4,
  'シーザー':4,'caesar':4,
  'スターライトビリー':2,'S級ビリー':2,'Ｓ級ビリー':2,'starlight billy':2,'billy starlight':2,
  'プルクラ':4,'pulchra':4,
  '千夏':4,'chinatsu':4,
  'ダイアリン':4,'dialyn':4,
  'アリス':4,'alice':4,
  '柚葉':4,'yuzuha2':4,
  '潘引壺':4,'パンダ':4,'パン':4,'pan yinhu':4,
  'ナンゴンユー':4,'南宮羽':4,'南宫羽':4,'nangong yu':4,
  '瞬光':8,'trigger2':8,'shunguang':8,
  // Ether
  'ニコール':5,'ニコ':5,'nicole':5,
  'ジュユアン':5,'zhu yuan':5,'朱鳶':5,
  'アストラ':5,'astra yao':5,'アストラ':5,
  'イーシェン':5,'yixuan':5,
  'イェシュングァン':5,'ye shunguang':5,
  'スナ':5,'sunna':5,
  'イーシェン':6,'儀玄':6,'yixuan':6,
  '南宮羽':5,'ゆう':5,
  'アリア':5,'aria':5,
  'リュシア':5,'lucia':5,
  'ビビアン':5,'vivian':5,
  // Wind
  'ヴェリナ':10,'verina':10,
  'ロクシー':10,
  // Lumina
  'レミエール':11,'remie-ru':11,'れみえーる':11,
};

const ATTR_INFO = {
  1: { cls: 'attr-electric', icon: '<img class="attr-electric-img" src="zzz-electric-icon.png" alt="">', label: '電気' },
  2: { cls: 'attr-fire',     icon: '<img class="attr-fire-img" src="zzz-fire-icon.png" alt="">', label: '炎' },
  3: { cls: 'attr-ice',      icon: '<img class="attr-ice-img" src="zzz-ice-icon.png" alt="">',  label: '氷' },
  4: { cls: 'attr-physical', icon: '<img class="attr-physical-img" src="zzz-physical-icon.png" alt="">',  label: '物理' },
  5: { cls: 'attr-ether',    icon: '<img class="attr-ether-img" src="zzz-ether-icon.png?v=2" alt="">',  label: 'エーテル' },
  6: { cls: 'attr-ether',    icon: '<img class="attr-yixuan-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA2CAYAAACbZ/oUAAAMTWlDQ1BJQ0MgUHJvZmlsZQAAeJyVVwdYU8kWnltSIQQIREBK6E0QkRJASggt9I4gKiEJEEqMCUHFjiy7gmsXEazoKkXR1RWQxYa6NhbF3hcLKsq6uC525U0IoMu+8r35vrnz33/O/HPOuXPvnQGA3sWXSnNRTQDyJPmy2GB/1uTkFBbpGSACOqACGqDwBXIpJzo6HMAy3P69vL4GEGV72UGp9c/+/1q0hCK5AAAkGuJ0oVyQB/FPAOCtAqksHwCiFPLms/KlSrwWYh0ZdBDiGiXOVOFWJU5X4YuDNvGxXIgfAUBW5/NlmQBo9EGeVSDIhDp0GC1wkgjFEoj9IPbJy5shhHgRxDbQBs5JV+qz07/SyfybZvqIJp+fOYJVsQwWcoBYLs3lz/k/0/G/S16uYngOa1jVs2QhscqYYd4e5cwIU2J1iN9K0iOjINYGAMXFwkF7JWZmKUISVPaojUDOhTkDTIgnyXPjeEN8rJAfEAaxIcQZktzI8CGbogxxkNIG5g+tEOfz4iHWg7hGJA+MG7I5JpsROzzvtQwZlzPEP+XLBn1Q6n9W5CRwVPqYdpaIN6SPORZmxSdBTIU4oECcGAmxBsSR8py4sCGb1MIsbuSwjUwRq4zFAmKZSBLsr9LHyjNkQbFD9nV58uHYsWNZYl7kEL6UnxUfosoV9kjAH/QfxoL1iSSchGEdkXxy+HAsQlFAoCp2nCySJMSpeFxPmu8fqxqL20lzo4fscX9RbrCSN4M4Xl4QNzy2IB8uTpU+XiLNj45X+YlXZvNDo1X+4PtAOOCCAMACCljTwQyQDcQdvU298E7VEwT4QAYygQg4DDHDI5IGeyTwGgcKwe8QiYB8ZJz/YK8IFED+0yhWyYlHONXVAWQM9SlVcsBjiPNAGMiF94pBJcmIB4ngEWTE//CID6sAxpALq7L/3/PD7BeGA5nwIUYxPCOLPmxJDCQGEEOIQURb3AD3wb3wcHj1g9UZZ+Mew3F8sSc8JnQSHhCuEroIN6eLi2SjvIwAXVA/aCg/6V/nB7eCmq64P+4N1aEyzsQNgAPuAufh4L5wZlfIcof8VmaFNUr7bxF89YSG7ChOFJQyhuJHsRk9UsNOw3VERZnrr/Oj8jV9JN/ckZ7R83O/yr4QtmGjLbHvsAPYaew4dhZrxZoACzuKNWPt2GElHllxjwZX3PBssYP+5ECd0Wvmy5NVZlLuVO/U4/RR1Zcvmp2vfBm5M6RzZOLMrHwWB/4xRCyeROA4juXs5OwGgPL/o/q8vYoZ/K8gzPYv3JLfAPA+OjAw8PMXLvQoAD+6w0/CoS+cDRv+WtQAOHNIoJAVqDhceSHALwcdvn36wBiYAxsYjzNwA17ADwSCUBAF4kEymAa9z4LrXAZmgXlgMSgBZWAlWAcqwRawHdSAPWA/aAKt4Dj4BZwHF8FVcBuunm7wHPSB1+ADgiAkhIYwEH3EBLFE7BFnhI34IIFIOBKLJCNpSCYiQRTIPGQJUoasRiqRbUgt8iNyCDmOnEU6kZvIfaQH+RN5j2KoOqqDGqFW6HiUjXLQMDQenYpmojPRQrQYXY5WoNXobrQRPY6eR6+iXehztB8DmBrGxEwxB4yNcbEoLAXLwGTYAqwUK8eqsQasBT7ny1gX1ou9w4k4A2fhDnAFh+AJuACfiS/Al+GVeA3eiJ/EL+P38T78M4FGMCTYEzwJPMJkQiZhFqGEUE7YSThIOAXfpW7CayKRyCRaE93hu5hMzCbOJS4jbiLuJR4jdhIfEvtJJJI+yZ7kTYoi8Un5pBLSBtJu0lHSJVI36S1ZjWxCdiYHkVPIEnIRuZxcRz5CvkR+Qv5A0aRYUjwpURQhZQ5lBWUHpYVygdJN+UDVolpTvanx1GzqYmoFtYF6inqH+kpNTc1MzUMtRk2stkitQm2f2hm1+2rv1LXV7dS56qnqCvXl6rvUj6nfVH9Fo9GsaH60FFo+bTmtlnaCdo/2VoOh4ajB0xBqLNSo0mjUuKTxgk6hW9I59Gn0Qno5/QD9Ar1Xk6JppcnV5Gsu0KzSPKR5XbNfi6E1QStKK09rmVad1lmtp9okbSvtQG2hdrH2du0T2g8ZGMOcwWUIGEsYOxinGN06RB1rHZ5Otk6Zzh6dDp0+XW1dF91E3dm6VbqHdbuYGNOKyWPmMlcw9zOvMd+PMRrDGSMas3RMw5hLY97ojdXz0xPplert1buq916fpR+on6O/Sr9J/64BbmBnEGMwy2CzwSmD3rE6Y73GCsaWjt0/9pYhamhnGGs413C7Ybthv5GxUbCR1GiD0QmjXmOmsZ9xtvFa4yPGPSYMEx8Tsclak6Mmz1i6LA4rl1XBOsnqMzU0DTFVmG4z7TD9YGZtlmBWZLbX7K451ZxtnmG+1rzNvM/CxCLCYp5FvcUtS4ol2zLLcr3lacs3VtZWSVbfWjVZPbXWs+ZZF1rXW9+xodn42sy0qba5Yku0Zdvm2G6yvWiH2rnaZdlV2V2wR+3d7MX2m+w7xxHGeYyTjKsed91B3YHjUOBQ73DfkekY7ljk2OT4YrzF+JTxq8afHv/ZydUp12mH0+0J2hNCJxRNaJnwp7Ods8C5yvnKRNrEoIkLJzZPfOli7yJy2exyw5XhGuH6rWub6yc3dzeZW4Nbj7uFe5r7RvfrbB12NHsZ+4wHwcPfY6FHq8c7TzfPfM/9nn94OXjleNV5PZ1kPUk0acekh95m3nzvbd5dPiyfNJ+tPl2+pr5832rfB37mfkK/nX5POLacbM5uzgt/J3+Z/0H/N1xP7nzusQAsIDigNKAjUDswIbAy8F6QWVBmUH1QX7Br8NzgYyGEkLCQVSHXeUY8Aa+W1xfqHjo/9GSYelhcWGXYg3C7cFl4SwQaERqxJuJOpGWkJLIpCkTxotZE3Y22jp4Z/XMMMSY6pirmceyE2Hmxp+MYcdPj6uJex/vHr4i/nWCToEhoS6QnpibWJr5JCkhandQ1efzk+ZPPJxski5ObU0gpiSk7U/qnBE5ZN6U71TW1JPXaVOups6eenWYwLXfa4en06fzpB9IIaUlpdWkf+VH8an5/Oi99Y3qfgCtYL3gu9BOuFfaIvEWrRU8yvDNWZzzN9M5ck9mT5ZtVntUr5oorxS+zQ7K3ZL/JicrZlTOQm5S7N4+cl5Z3SKItyZGcnGE8Y/aMTqm9tETaNdNz5rqZfbIw2U45Ip8qb87XgRv9doWN4hvF/QKfgqqCt7MSZx2YrTVbMrt9jt2cpXOeFAYV/jAXnyuY2zbPdN7ieffnc+ZvW4AsSF/QttB8YfHC7kXBi2oWUxfnLP61yKloddFfS5KWtBQbFS8qfvhN8Df1JRolspLr33p9u+U7/Dvxdx1LJy7dsPRzqbD0XJlTWXnZx2WCZee+n/B9xfcDyzOWd6xwW7F5JXGlZOW1Vb6ralZrrS5c/XBNxJrGtay1pWv/Wjd93dlyl/It66nrFeu7KsIrmjdYbFi54WNlVuXVKv+qvRsNNy7d+GaTcNOlzX6bG7YYbSnb8n6reOuNbcHbGqutqsu3E7cXbH+8I3HH6R/YP9TuNNhZtvPTLsmurprYmpO17rW1dYZ1K+rRekV9z+7U3Rf3BOxpbnBo2LaXubdsH9in2Pfsx7Qfr+0P2992gH2g4SfLnzYeZBwsbUQa5zT2NWU1dTUnN3ceCj3U1uLVcvBnx593tZq2Vh3WPbziCPVI8ZGBo4VH+49Jj/Uezzz+sG162+0Tk09cORlzsuNU2KkzvwT9cuI05/TRM95nWs96nj10jn2u6bzb+cZ21/aDv7r+erDDraPxgvuF5oseF1s6J3UeueR76fjlgMu/XOFdOX818mrntYRrN66nXu+6Ibzx9GbuzZe3Cm59uL3oDuFO6V3Nu+X3DO9V/2b7294ut67D9wPutz+Ie3D7oeDh80fyRx+7ix/THpc/MXlS+9T5aWtPUM/FZ1OedT+XPv/QW/K71u8bX9i8+OkPvz/a+yb3db+UvRz4c9kr/Ve7/nL5q60/uv/e67zXH96UvtV/W/OO/e70+6T3Tz7M+kj6WPHJ9lPL57DPdwbyBgakfBl/cCuAAeXRJgOAP3cBQEsGgAHPjdQpqvPhYEFUZ9pBBP4TVp0hBwvcuTTAPX1ML9zdXAdg3w4ArKA+PRWAaBoA8R4AnThxpA6f5QbPncpChGeDrYGf0vPSwb8pqjPpV36PboFS1QWMbv8FA72C4BYIBEkAAAkBSURBVHic7Zp7jFXFHcc/c87MnN2FFeURaWt8YSG2VtQqrURRCxUCSmjFCiLIVnQVKiFaUlJNs43YyKPEKDEuKiCWgEasjVYErW3w1apFkVWWEIq2gkbrqwuye+bVP+4euHv3Iix77+Ufvslm7845M/P97Jn5zW/mHjiqozqq7qp5HrXN86g9En1HR6LTNGZgGjPwSPRdceAdDVRFcHYEZ+9ooKrS/VccuKUHFyBIECQtPbig0v1XFLhpEadFEYP2dR4xqGkRp1XSQ8WAtzfSC8/FnS54Lt5+F70q5aMiwG80otp2MwpBUnjNOWo+94x7oxFVCS8VAdYtjPDQt7DcWWLj0MbyrZad/LQSXsoO/PYCzo8EpxaWO78PVqcpyhnOXDub0eX2U1bgTQs4I4o4p7DcB3balI8yWOPQzqK95dI/zWBYOT2VDXjzfAbEcWfz3iJC4JU98GJbmnvKzqLT9h8TuGb1dM4rl6+yAG+axwlRxI8JiPxyZ4lbDRsHz+bjYbfxoU35uzE5UOfQ3qG9p8qnzPzDVL5XDm8lB26aT38pGRMEcX65s8TG8+F5t/NqVjZ8Ps9by3su95SV82jrUCFQ4wK/WTqJ75TaX0mBN9/N8URcFkDmlzuHNJav0oSnBYSsXEDQkuXW88U+WJ+D955aL7jr/hJDlwx4890cLyyXF661ziFtGzY1PDH0FvYW1hu5kD17U+6xlrYM1nm0Dyjn6RUHFqyYzOml8lkS4Kb59D8QbGqI2gRPDm3gswPVn7yED51noXOQwVqPjCBISULM3NXTSgNdEmAh6QPo/DLnkCZFWUd12sY3D9aGNQwwjhofUM6h2mFtLDAqQgvBiaXw2m3gpkX0/u4tvOMCGwi5+ZnBGp+LwNYybu0vOf9AbSybzGgPNxPQzqGEwO+DjbEi5r6rHmDdMzdzQnf9dgu4aSHn4ZmwaQFnDJ5NkwtscJY4H9akaGPQ1jFhTZGk4lBgJzzA2qdmMlxI5r5wC2O741kc/JbOCg1Eb/fg4jhqn1eB4AIbBs+m6bU7OSt1jHZpLm00FmVdbp21FmUcqyY28heApZMZGWDWocDKmMlJjNUSo2I2DFE8KhrwXfXe5Se87R6S5mMYsw8WQCDw/Oi1OzlryG281Wp4zhhUB9hcUqGDZ9qKOkYCiJj3Q8B0BTaRmCTh3C2auv8sorqswE2L6J2mjHehYwBxDmktSWr5BsCIO3i9Ff7cAdah2vNl7QMzlk7hsrrlNNvAHCFoKQbbbvBEHWEyWKUxWmGqEk6JJNftauy8C/s6HfKQ3jSPQXHMRYiO+1bnkKYNmTpeHNrAa/nX1sxgWAhM8bn1VTuHsh7lPdp7pPMsrl/Fkysmczoxc5VEC7EfNtOLcxiRKC7XCqsVpkpjE41JNCaGtgDre9ezuSTAuxqp+WwPwwgMKLzmHDJto1U41p7bwL+L1V9Vz/DgmeYtOoMNAWUdMooJUvD7ukd46uEpDEyqOHnCEtYXa+eNOxhQLflZtaZHBhuJ/Vmbh2Zbxfr+U9hzWMDN86i1itMJDKZgjQVwlmAsW3rV8sq3Z9L2dZ2srGOkCczwDu0CKuTNWRlhIsm9kx7kma9rA2DHMqriL7moupozY9ExfW2HaQuC1/G83bueL4u1cVjLUrbOtlrktm0Hv3/SMtZ5zxLnkYWwMsLqiOv+OJ1LD9bOyS2EmhqcpOvROVOXh7RzSGvQrRad5iLxXut4fPQCtherv2wqo4D36pbT3DiRcVHMLBnth41jjIoxUmN1xEMj7+aFoj4Wc5LWjI2gZ7Hr3R7Shdo0j0HAcGvpkcE6m4vAxiLbLE+Pv5fn8+ssv5YxzvELD8YF5ty4kneXTeZyGTO9A6zMLTlaYaKIRy6ax4b8dj66hx9KzSVRkfEoAmlJg1a+/vE7+piUK42lfx6scgZtPdoYXp74AEsLYHVwKBHTIh231q2ieeVURuuEaVLsh5UKkyisjklVzKNnN/AKwAeLuaxKcWZ+gNqnwGcS1hxTz38PlaFLc/gHv+ZTA8u94/1CWOtR3uUidSdYgZcRSayZu/p6Bk5azjMy5n6pcuurVphqhU1yn211wtitixgCkCh2RUXmbAw7jtM83BXYLgMDXNJA648SHk4N/8yHdSkrJi3l+aKwWYCSaAQnA/zkPtbHMUt1+5NVEqMkpkphtMb2lIz6pJFz+tWzMYL12cYEAM+mY3bxmKijtav+DyuXzvTYTYz1gfGdYNvX2nzYOMYA9139EM/mt/HyrximNFdohc1g962z4CNYf2w9G79o5BwPlwIv9a7npcP13C1ggDXTOOGKB/kggw2BxHpkLPAqxsRxLjgVg830ZgNDqxPGdoDN5mwgZNAtS+lX+3M+6Y7fbgMDLLuGUUEwy+eGd5dgM21dxJCeklFJgu0UoAJBCJ497gbe6q7XTtnK4cgK3seRukBNIayM+Uoq/nWwNvrWsitYWqOC004AIUid696TzVSSI57rH2GLE8yJIv6XD6skVkmEFtz67KzcTqqYPlhMHzxXRnERWGizMav73sTOUngt2anljSt5t6qa2XHMlxmsjDFaYpUiSRQz/9rQOUva1UhNjeYqITq/DZDB9ruOXaXyWdJz6SkPsiXW3K5i9mSw7b+NlvSqcUwNDfv7DAFRBeOg8/fDERjneLSUsO3tllZXL6E5jrhTReyNI9J22FxCoTilKWFEdu8XjVyI4KROjQRccDxeqmGcr5JE6WJaN5Pvq4QbEonT+7MooxRtccz9NZogFdfS+Z/uneXJftPZWg5fZQOGXFKhE8ZnsFphqhOs1GzTEcGFXNaVLxdY16+ejeXyVFZggDd/y5hqzYUZrGrPoNp77/jtouPVfjfxt3L6KTswwPaFTKxJGKgKjmXy5QVb+17PE+X2UpF3PE6t5XGt2Xkg2EjwcR/PU5XwUhFgUY+Je7JGhM67GxFopYYnRD2mEl4q9p7WsZP43NHx+BXAwdpjJ/F5pXxU9E28vvU0C3gn+1vAO33raa6kh4q/a7l7N8+JQKsItO7ezXOV7v+I6NMlDP10CUOPRN8l2R52VSLsH9ZHVWb9H07wSW0vHiFLAAAAAElFTkSuQmCC" alt="">',  label: 'エーテル（イーシェン）' },
  7: { cls: 'attr-miyabi',   icon: '<img class="attr-elegance-img" src="zzz-elegance-icon.png" alt="">',  label: '氷（星見雅）' },
  8: { cls: 'attr-trigger',  icon: '<img class="attr-flash-img" src="data:image/png;base64,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" alt="">',  label: '物理（瞬光）' },
  9: { cls: 'attr-unknown',  icon: '？',  label: '不明' },
  10: { cls: 'attr-wind',    icon: '<img class="attr-wind-img" src="zzz-wind-icon.png" alt="">',   label: '風' },
  11: { cls: 'attr-lumina',  icon: '<img class="attr-lumina-img" src="zzz-lumina-icon.png" alt="">', label: '流明' },
};

function normalizeAttrName(name) {
  return name.trim().normalize('NFKC').replace(/^[「『(（\s]+|[」』)）\s]+$/g, '');
}

function resolveAttrId(name) {
  const raw = normalizeAttrName(name);
  if (!raw) return null;

  if (CHAR_ATTR[raw] != null) return CHAR_ATTR[raw];
  const lower = raw.toLowerCase();
  if (CHAR_ATTR[lower] != null) return CHAR_ATTR[lower];

  for (const item of [...AGENT_ROSTER, ...WEAPON_ROSTER]) {
    if (item.name === raw) return item.attr;
    if ((item.aliases || []).some(a => a === raw || a.toLowerCase() === lower)) return item.attr;
  }

  const norm = raw.replace(/\s+/g, '').toLowerCase();
  let exactId = null;
  let exactKeyLen = 0;
  for (const [k, id] of Object.entries(CHAR_ATTR)) {
    const kn = k.replace(/\s+/g, '').toLowerCase();
    if (kn === norm && k.length >= exactKeyLen) {
      exactId = id;
      exactKeyLen = k.length;
    }
  }
  return exactId;
}

function getAttrIcon(name, banner) {
  // 音動機バナーの場合はWEAPON_ROSTERを優先して検索
  if (banner === 'weapon') {
    const normalized = normalizeAttrName(name);
    const lower = normalized.toLowerCase();
    for (const item of WEAPON_ROSTER) {
      if (item.name === normalized || item.name.toLowerCase() === lower) {
        const a = ATTR_INFO[item.attr] || ATTR_INFO[9];
        if (item.attr === 8) {
          return `<span class="attr-icon attr-trigger" title="${a.label}" style="animation: miyabi-spin 3s linear infinite; display:inline-flex; align-items:center; justify-content:center;"><img class="attr-flash-img" src="data:image/png;base64,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" alt=""></span>`;
        }
        if (item.attr === 7) {
          return `<span class="attr-icon attr-miyabi" title="${a.label}"><img class="attr-elegance-img" src="zzz-elegance-icon.png" alt=""></span>`;
        }
        return `<span class="attr-icon ${a.cls}" title="${a.label}">${a.icon}</span>`;
      }
      if ((item.aliases || []).some(a => a === normalized || a.toLowerCase() === lower)) {
        const a = ATTR_INFO[item.attr] || ATTR_INFO[9];
        return `<span class="attr-icon ${a.cls}" title="${a.label}">${a.icon}</span>`;
      }
    }
  }
  const attrId = resolveAttrId(name);
  if (!attrId) return '<span class="attr-icon attr-unknown">？</span>';
  const a = ATTR_INFO[attrId];
  if (attrId === 8) {
    return `<span class="attr-icon attr-trigger" title="${a.label}" style="animation: miyabi-spin 3s linear infinite; display:inline-flex; align-items:center; justify-content:center;"><img class="attr-flash-img" src="data:image/png;base64,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" alt=""></span>`;
  }
  if (attrId === 7) {
    return `<span class="attr-icon attr-miyabi" title="${a.label}"><img class="attr-elegance-img" src="zzz-elegance-icon.png" alt=""></span>`;
  }
  return `<span class="attr-icon ${a.cls}" title="${a.label}">${a.icon}</span>`;
}

// 候補一覧（表示名は漢字優先・カタカナは別名で検索可）
const AGENT_ROSTER = [
  { name: 'アンビー', attr: 1, aliases: ['anby', 'あんびー'] },
  { name: 'セス', attr: 1, aliases: ['sesu', 'せす'] },
  { name: '青衣', attr: 1, aliases: ['ちんいー', 'tinni-'] },
  { name: 'リナ', attr: 1, aliases: ['rina', 'りな'] },
  { name: 'グレース', attr: 1, aliases: ['gure-su', 'ぐれーす'] },
  { name: 'トリガー', attr: 1, aliases: ['toriga-', 'とりがー'] },
  { name: '柳', attr: 1, aliases: ['やなぎ', 'yanagi'] },
  { name: '悠真', attr: 1, aliases: ['はるまさ', 'harumasa'] },
  { name: '0号アンビー', attr: 1, aliases: ['0gouanbi-', 'ぜろごうあんびー'] },
  { name: 'シード', attr: 1, aliases: ['si-do', 'しーど'] },
  { name: 'アンドー', attr: 1, aliases: ['anndo-', 'あんどー'] },
  { name: 'シーシィア', attr: 1, aliases: ['si-sia', 'しーしあ'] },
  { name: 'クラレッタ', attr: 1, aliases: ['くられった', 'kuraretta'] },
  { name: 'ベン', attr: 2, aliases: ['ben', 'べん'] },
  { name: 'ルーシー', attr: 2, aliases: ['ru-si-', 'るーしー'] },
  { name: '11号', attr: 2, aliases: ['11gou', 'じゅういちごう'] },
  { name: 'バーニス', attr: 2, aliases: ['ba-nisu', 'ばーにす'] },
  { name: 'クレタ', attr: 2, aliases: ['kureta', 'くれた'] },
  { name: 'イヴリン', attr: 2, aliases: ['iburin,', 'いぶりん'] },
  { name: 'ライト', attr: 2, aliases: ['raito', 'らいと'] },
  { name: '盤岳', attr: 2, aliases: ['bangaku', 'ばんがく'] },
  { name: '真斗', attr: 2, aliases: ['manato', 'まなと', 'komano', 'こまの'] },
  { name: 'オルペウス', attr: 2, aliases: ['orupeusu', 'おるぺうす'] },
  { name: 'S級ビリー', attr: 2, aliases: ['Skyuubiri-', 'びりー', 'beri-'] },
  { name: '橘福福', attr: 2, aliases: ['福福', 'フーフー', 'fu-fu-'] },
  { name: 'エレン', attr: 3, aliases: ['eren', 'えれん'] },
  { name: 'ライカン', attr: 3, aliases: ['raikan', 'らいかん'] },
  { name: '蒼角', attr: 3, aliases: ['soukaku', 'そうかく'] },
  { name: 'ザオ', attr: 3, aliases: ['zao', 'ざお'] },
  { name: 'イドリー', attr: 3, aliases: ['idori-', 'いどりー'] },
  { name: 'ヒューゴ', attr: 3, aliases: ['hyu-go', 'ひゅーご'] },
  { name: 'プロメイア', attr: 3, aliases: ['puromeia', 'ぷろめいあ'] },
  { name: 'シグリット', attr: 3, aliases: ['しぐりっと', 'siguritto'] },
  { name: '星見雅', attr: 7, aliases: ['ほしみ', 'みやび', 'miyabi', 'hosimi'] },
  { name: '猫又', attr: 4, aliases: ['ねこまた', 'nekomata'] },
  { name: 'パイパー', attr: 4, aliases: ['paipa-', 'ぱいぱー'] },
  { name: 'ビリー', attr: 4, aliases: ['biri-', 'びりー'] },
  { name: 'カリン', attr: 4, aliases: ['karin', 'かりん'] },
  { name: 'ジェーン', attr: 4, aliases: ['je-nn', 'じぇーん', 'jane'] },
  { name: 'シーザー', attr: 4, aliases: ['si-za-', 'しーざー'] },
  { name: 'プルクラ', attr: 4, aliases: ['purukura', 'ぷるくら'] },
  { name: '千夏', attr: 4, aliases: ['tinatu', 'ちなつ'] },
  { name: 'ダイアリン', attr: 4, aliases: ['daiarinn', 'だいありん'] },
  { name: 'アリス', attr: 4, aliases: ['arisu', 'ありす'] },
  { name: '柚葉', attr: 4, aliases: ['yuzuha', 'ゆずは'] },
  { name: '潘引壺', attr: 4, aliases: ['いんふー', 'ぱんだ', 'panda'] },
  { name: '瞬光', attr: 8, aliases: ['shunkou', 'しゅんこう'] },
  { name: 'ニコ', attr: 5, aliases: ['にこ', 'niko'] },
  { name: '朱鳶', attr: 5, aliases: ['shuenn', 'しゅえん'] },
  { name: 'アストラ', attr: 5, aliases: ['asutora', 'あすとら'] },
  { name: '儀玄', attr: 6, aliases: ['i-shenn', 'いーしぇん'] },
  { name: 'アリア', attr: 5, aliases: ['aria', 'ありあ'] },
  { name: 'リュシア', attr: 5, aliases: ['ryusia', 'りゅしあ'] },
  { name: '南宮羽', attr: 5, aliases: ['なんぐうゆう', 'nanguuyuu', 'ゆう', 'yuu'] },
  { name: 'ビビアン', attr: 5, aliases: ['bibian', 'びびあん', 'vivian'] },
  { name: 'ヴェリナ', attr: 10, aliases: ['verina', 'ゔぇりな', 'べりな'] },
  { name: 'ロクシー', attr: 10, aliases: ['rokusi-', 'ろくしー'] },
  { name: 'レミエール', attr: 11, aliases: ['remie-ru', 'れみえーる'] },
];

const WEAPON_ROSTER = [
  { name: '影を追う白き牙(シーシィア)', attr: 1, aliases: ['si-sia','しーしあ'] },
  { name: '駆動する種(シード)', attr: 1, aliases: ['si-do','しーど'] },
  { name: '純然たる犠牲(0号アンビー)', attr: 1, aliases: ['0gouanbi-', 'ぜろごうあんびー'] },
  { name: '奪魂の瞑目(トリガー)', attr: 1, aliases: ['toriga-', 'とりがー'] },
  { name: '残心の青籠(悠真)', attr: 1, aliases: ['はるまさ', 'harumasa'] },
  { name: '刻流の賢者(柳)', attr: 1, aliases: ['やなぎ', 'yanagi'] },
  { name: '秩序の守り手・特化型(セス)', attr: 1, aliases: ['sesu','せす']},
  { name: '玉壺青氷(青衣)', attr: 1, aliases: ['ちんいー', 'tinni-'] },
  { name: 'ドリルリグ-レッドシャフト(アンドー)', attr: 1, aliases: ['ando-', 'あんどー'] },
  { name: 'デマラ式電池Ⅱ型(アンビー)', attr: 1, aliases: ['anbi-', 'あんびー'] },
  { name: '複合コンパイラ(グレース)', attr: 1, aliases: ['gure-su', 'ぐれーす'] },
  { name: '啜り泣くゆりかご(リナ)', attr: 1, aliases: ['りな', 'rina'] },
  { name: '深紅の渇望(クラレッタ)', attr: 1, aliases: ['kuraretta', 'くられった'] },
  { name: 'スターライトバイザー(S級ビリー)', attr: 2, aliases: ['Skyuubiri-', 'Sきゅうびりー', 'biri-'] },
  { name: '金剛不壊怒髪衝冠(盤岳)', attr:2, aliases: ['bangaku', 'ばんがく'] },
  { name: '燔火の朧夜(狛野真斗)', attr: 2, aliases: ['komano', 'こまの', 'manato', 'まなと'] },
  { name: '憤怒の銃騒(オルペウス)', attr: 2,aliases: ['orupeusu', 'おるぺうす'] },
  { name: '心弦のノクターン(イヴリン)', attr: 2, aliases: ['ivurin', 'iburin', 'いぶりん'] },
  { name: '招福の虎炉(橘福福)', attr: 2, aliases: ['ふーふー', 'ちー', 'fu-fu-'] },
  { name: '炎心の桂冠(ライト)', attr: 2, aliases: ['raito', 'らいと'] },
  { name: 'バーニング・シェイカー(バーニス)', attr: 2, aliases: ['ba-nisu', 'ばーにす'] },
  { name: '喧嘩腰のボンバルダム(ルーシー)', attr: 2, aliases: ['ru-si-', 'るーしー'] },
  { name: 'ビガー・シリンダー(ベン)', attr: 2, aliases: ['ben', 'べん'] },
  { name: 'ブリムストーン(11号)', attr: 2, aliases: ['11gou', 'じゅういちごう'] },
  { name: '燃獄ギア(クレタ)', attr: 2, aliases: ['kureta', 'くれた'] },
  { name: '甘さ控えめ雪うさぎ(ザオ)', attr: 3, aliases: ['zao', 'ざお'] },
  { name: 'セイレーンクレードル(イドリー)', attr: 3, aliases: ['idori-', 'いどりー'] },
  { name: '千面の落日(ヒューゴ)', attr: 3, aliases: ['hyu-go', 'ひゅーご'] },
  { name: 'あられ落つ星殿(星見雅)', attr: 7, aliases: ['hosimimiyabi', 'miyabi','みやび'] },
  { name: 'ディープシー・ビジター(エレン)', attr: 3, aliases: ['eren', 'えれん'] },
  { name: '栄光の騎士道(シグリット)', attr: 3, aliases: ['しぐりっと', 'siguritto'] },
  { name: '恥じらう悪面(蒼角)', attr: 3, aliases: ['soukaku', 'そうかく'] },
  { name: '拘縛されし者(ライカン)', attr: 3, aliases: ['raikan', 'らいかん'] },
  { name: 'フロスト・クレセント(プロメイア)', attr: 3, aliases: ['puromeia', 'ぷろめいあ'] },
  { name: '想いが織りなす歌(千夏)', attr: 4, aliases: ['ちなつ', 'tinatu'] },
  { name: '孤光彩雲(瞬光)', attr: 8, aliases: ['syunkou', 'しゅんこう'] },
  { name: '昨夜からの着信(ダイアリン)', attr: 4, aliases: ['だいありん', 'daiarin'] },
  { name: '十面百錬の星(アリス)', attr: 4, aliases: ['arisu', 'ありす'] },
  { name: '狸の七変化(柚葉)', attr: 4, aliases: ['ゆずは', 'yuzuna'] },
  { name: '雷鳴が如き八卦(潘引壺)', attr: 4, aliases: ['panda', 'ぱんだ','inhu-'] },
  { name: 'ペーパーカッター(プルクラ)', attr: 4, aliases: ['purukura', 'ぷるくら'] },
  { name: '猛進するキバ(シーザー)', attr: 4, aliases: ['si-za-', 'しーざー'] },
  { name: '磨き抜かれた切っ先(じぇーん)', attr: 4, aliases: ['je-nn', 'じぇーん'] },
  { name: 'グロウル・マイ・カー(パイパー)', attr: 4, aliases: ['paipa-', 'ぱいぱー'] },
  { name: 'ハウスキーパー(カリン)', attr: 4, aliases: ['かりん', 'karinn'] },
  { name: 'スターライトエンジン(ビリー)', attr: 4, aliases: ['biri-', 'びりー'] },
  { name: '鋼の肉球(猫又)', attr: 4, aliases: ['nekomata', 'ねこまた'] },
  { name: '妄想ディスコティック(南宮羽)', attr: 5, aliases: ['yuu', 'nanguuyuu','なんぐうゆう','ゆう'] },
  { name: '殻の中の魂(アリア)', attr: 5, aliases: ['aria', 'ありあ'] },
  { name: '炉で歌い上げられる夢(リュシア)', attr: 5, aliases: ['ryusia', 'りゅしあ'] },
  { name: '青溟の鳥籠(儀玄)', attr: 6, aliases: ['いーしぇん', 'i-shenn'] },
  { name: '鳥は夢へと羽ばたいて(ビビアン)', attr: 5, aliases: ['bibiann', 'びびあん'] },
  { name: '優美のヴァニティ(アストラ)', attr: 5, aliases: ['asutora', 'あすとら'] },
  { name: 'サプレッサーⅥ型(朱鳶)', attr: 5, aliases: ['syuen', 'しゅえん'] },
  { name: 'ザ・ボールト(ニコ)', attr: 5, aliases: ['niko', 'にこ'] },
  { name: 'ストリートスター(ホビーショップ)', attr: 9, aliases: ['hobi-', 'ほびー'] },
  { name: 'まな板の鯉(ホビーショップ)', attr: 9, aliases: ['hobi-', 'ほびー'] },
  { name: '貴重な石化コア(ホビーショップ)', attr: 9, aliases: ['ほびー', 'hobi-'] },
  { name: '密林の食いしん坊(ホビーショップ)', attr: 9, aliases: ['ほびー', 'hobi-'] },
  { name: '双生の涙(ホビーショップ)', attr: 9, aliases: ['sousei', 'そうせい','namida','ほびー','hobi-'] },
  { name: '歳月の薄片(ホビーショップ)', attr: 9, aliases: ['hobi-', 'ほびー'] },
  { name: '正規版変身装置(ホビーショップ)', attr: 9, aliases: ['hobi-', 'ほびー'] },
  { name: 'ラビットチャージャー(ホビーショップ)', attr: 9, aliases: ['hobi-', 'ほびー'] },
  { name: '魔法の立体パズル(ホビーショップ)', attr: 9, aliases: ['ほびー', 'hobi-'] },
  { name: 'キャノンローラー(ファンド)', attr: 9, aliases: ['fando', 'ふぁんど'] },
  { name: 'シックスシューター(ファンド)', attr: 9, aliases: ['fando', 'ふぁんど'] },
  { name: '電撃リップグロス(ファンド)', attr: 9, aliases: ['fando', 'ふぁんど'] },
  { name: 'ゲームボール(ファンド)', attr: 9, aliases: ['fando', 'ふぁんど'] },
  { name: 'ホットスプリング(ファンド)', attr: 9, aliases: ['fando', 'ふぁんど'] },
  { name: 'エレクトロウォーク(ファンド)', attr: 9, aliases: ['fando', 'ふぁんど'] },
  { name: '金襴の心(ヴェリナ)', attr: 10, aliases: ['verina', 'ゔぇりな', 'べりな'] },
  { name: '緋月の銀棺(ロクシー)', attr: 10, aliases: ['rokusi-', 'ろくしー'] },
  { name: '空舞う翼、帰還の詩(レミエール)', attr: 11, aliases: ['remie-ru', 'れみえーる'] },
];

/** 候補リストの属性を CHAR_ATTR に同期（表記ゆれ・別名も含む） */
function syncCharAttrFromRosters() {
  for (const item of [...AGENT_ROSTER, ...WEAPON_ROSTER]) {
    CHAR_ATTR[item.name] = item.attr;
    (item.aliases || []).forEach(a => { CHAR_ATTR[a] = item.attr; });
  }
}
syncCharAttrFromRosters();

const ZZZ_ATTR_FILTERS = [
  { val: '', label: 'すべて' },
  { val: '1', label: '<img class="attr-filter-icon" src="zzz-electric-icon.png" alt="">電気' },
  { val: '2', label: '<img class="attr-filter-icon" src="zzz-fire-icon.png" alt="">炎' },
  { val: '3', label: '<img class="attr-filter-icon" src="zzz-ice-icon.png" alt="">氷' },
  { val: '4', label: '<img class="attr-filter-icon" src="zzz-physical-icon.png" alt="">物理' },
  { val: '5', label: '<img class="attr-filter-icon" src="zzz-ether-icon.png?v=2" alt="">エーテル' },
  { val: '10', label: '<img class="attr-filter-icon" src="zzz-wind-icon.png" alt="">風' },
  { val: '11', label: '<img class="attr-filter-icon" src="zzz-lumina-icon.png" alt="">流明' },
];

const ATTR_FILTERS = ZZZ_ATTR_FILTERS; // 後方互換

// キャラクター画像マッピング（名前 -> 画像データURL）。
// 対応する画像がない名前は自動的にプレースホルダーアイコンが表示される。
// 画像を追加したい場合は、ここに "キャラ名": "data:image/png;base64,...." の形で追加するだけでOK。
const CHARACTER_IMAGES = {
  '柳': '柳.png',
  '11号': '11号.png',
  'オルペウス': 'オルペウス.png',
  'アストラ': 'アストラ.png',
  '0号アンビー': '0号アンビー.png',
  'S級ビリー': 'S級ビリー.png',
  'エレン': 'エレン.png',
  'シーシィア': 'シーシィア.png',
  'クラレッタ': 'クラレッタ.png',
  'イドリー': 'イドリー.png',
  'アリス': 'アリス.png',
  'アンドー': 'アンドー.png',
  'アンビー': 'アンビー.png',
  'シード': 'シード.png',
  'イヴリン': 'イヴリン.png',
  'ザオ': 'ザオ.png',
  'グレース': 'グレース.png',
  'アリア': 'アリア.png',
  'カリン': 'カリン.png',
  'ヴェリナ': 'ヴェリナ.png',
  'ロクシー': 'ロクシー.png',
  'シーザー': 'シーザー.png',
  'クレタ': 'クレタ.png',
  'シグリット': 'シグリット.png',
  'ジェーン': 'ジェーン.png',
  'ノルムー': 'ノルムー.png',
  'セス': 'セス.png',
  'ニコ': 'ニコ.png',
  'トリガー': 'トリガー.png',
  'ベン': 'ベン.png',
  'リュシア': 'リュシア.png',
  'リナ': 'リナ.png',
  'プロメイア': 'プロメイア.png',
  'プルクラ': 'プルクラ.png',
  'ダイアリン': 'ダイアリン.png',
  'ライカン': 'ライカン.png',
  'ライト': 'ライト.png',
  'ピュロイス': 'ピュロイス.png',
  'ビビアン': 'ビビアン.png',
  'ヒューゴ': 'ヒューゴ.png',
  'パイパー': 'パイパー.png',
  'ビリー': 'ビリー.png',
  'バーニス': 'バーニス.png',
  'ルーシー': 'ルーシー.png',
  '儀玄': '儀玄.png',
  '星見雅': '星見雅.png',
  '橘福福': '橘福福.png',
  '瞬光': '瞬光.png',
  '盤岳': '盤岳.png',
  '猫又': '猫又.png',
  '南宮羽': '南宮羽.png',
  '真斗': '真斗.png',
  '蒼角': '蒼角.png',
  '青衣': '青衣.png',
  '千夏': '千夏.png',
  '潘引壺': '潘引壺.png',
  '悠真': '悠真.png',
  '柚葉': '柚葉.png',
  '朱鳶': 'しゅえん.webp',
  'レミエール': 'レミエール.png',
  '空舞う翼、帰還の詩(レミエール)': '空舞う翼、帰還の詩(レミエール).png',
};

function getCharPhotoSrc(name) {
  if (!name) return null;
  return CHARACTER_IMAGES[name.trim()] || null;
}

// 新規記録フォーム／編集モーダルのプレビュー画像を更新する
function updateCharPhotoPreview(imgId, placeholderId, name) {
  const img = document.getElementById(imgId);
  const placeholder = document.getElementById(placeholderId);
  if (!img || !placeholder) return;
  const src = getCharPhotoSrc(name);
  if (src) {
    img.src = src;
    img.style.display = '';
    placeholder.style.display = 'none';
  } else {
    img.removeAttribute('src');
    img.style.display = 'none';
    placeholder.style.display = '';
  }
}

// 履歴リストの各アイテムに表示する小さいアバターのHTMLを返す
const PLACEHOLDER_PERSON_SVG = '<svg class="placeholder-person-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="4" fill="currentColor"/><path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" fill="currentColor"/></svg>';
function getRecordAvatarHtml(name) {
  const src = getCharPhotoSrc(name);
  if (src) {
    return '<div class="record-avatar"><img src="' + src + '" alt=""></div>';
  }
  return '<div class="record-avatar record-avatar-empty">' + PLACEHOLDER_PERSON_SVG + '</div>';
}

const namePickerState = {};

function attrMatchesFilter(itemAttr, filterVal) {
  if (!filterVal) return true;
  const a = Number(itemAttr);
  const f = Number(filterVal);
  if (f === 3) return a === 3 || a === 7;
  if (f === 4) return a === 4 || a === 8;
  if (f === 5) return a === 5 || a === 6;
  return a === f;
}

function buildSearchTerms(item) {
  const terms = [item.name];
  (item.aliases || []).forEach(t => terms.push(t));
  return terms;
}

function itemMatchesQuery(item, query) {
  if (!query) return true;
  const q = query.trim();
  const ql = q.toLowerCase();
  return buildSearchTerms(item).some(t => {
    const tl = t.toLowerCase();
    return t.includes(q) || tl.includes(ql);
  });
}

function getRoster(banner) {
  return banner === 'weapon' ? WEAPON_ROSTER : AGENT_ROSTER;
}

function getFilteredRoster(banner, attrFilter, query) {
  return getRoster(banner)
    .filter(item => attrMatchesFilter(item.attr, attrFilter))
    .filter(item => itemMatchesQuery(item, query))
    .slice(0, 40);
}

function getActiveAttrFilters() {
  return ZZZ_ATTR_FILTERS;
}

function initNamePicker(cfg) {
  const input = document.getElementById(cfg.inputId);
  const suggest = document.getElementById(cfg.suggestId);
  const filterRow = document.getElementById(cfg.filterId);
  if (!input || !suggest || !filterRow) return;

  const state = {
    inputId: cfg.inputId,
    suggestId: cfg.suggestId,
    filterId: cfg.filterId,
    attrFilter: '',
    activeIdx: -1,
    getBanner: cfg.getBanner,
  };
  namePickerState[cfg.inputId] = state;

  function buildFilterButtons() {
    const filters = getActiveAttrFilters();
    filterRow.innerHTML = filters.map(f =>
      `<button type="button" class="attr-filter-btn${f.val === '' ? ' on' : ''}" data-attr="${f.val}">${f.label}</button>`
    ).join('');
    state.attrFilter = '';
    filterRow.querySelectorAll('.attr-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filterRow.querySelectorAll('.attr-filter-btn').forEach(b => b.classList.remove('on'));
        btn.classList.add('on');
        state.attrFilter = btn.dataset.attr;
        renderNameSuggest(state);
        input.focus();
      });
    });
  }

  buildFilterButtons();
  state._rebuildFilters = buildFilterButtons;

  input.addEventListener('input', () => {
    state.activeIdx = -1;
    renderNameSuggest(state);
    if (state.inputId === 'inp-name') {
      updateCharPhotoPreview('char-photo-img', 'char-photo-placeholder', input.value);
    } else if (state.inputId === 'edit-name') {
      updateCharPhotoPreview('edit-photo-img', 'edit-photo-placeholder', input.value);
    }
  });
  input.addEventListener('focus', () => renderNameSuggest(state));
  input.addEventListener('keydown', (e) => handleNameSuggestKey(e, state));
  suggest.addEventListener('mousedown', (e) => {
    const item = e.target.closest('.name-suggest-item');
    if (item) {
      e.preventDefault();
      pickNameSuggest(state, item.dataset.name);
    }
  });
}

// ゲーム切り替え時にフィルターボタンと候補を更新する
function refreshNamePickers() {
  Object.values(namePickerState).forEach(state => {
    if (state._rebuildFilters) state._rebuildFilters();
    closeNameSuggest(state);
  });
}

function renderNameSuggest(state) {
  const input = document.getElementById(state.inputId);
  const suggest = document.getElementById(state.suggestId);
  const banner = state.getBanner();
  const list = getFilteredRoster(banner, state.attrFilter, input.value);

  if (!list.length) {
    suggest.innerHTML = '<div class="name-suggest-empty">候補がありません（手入力も可）</div>';
    suggest.classList.add('open');
    return;
  }

  suggest.innerHTML = list.map((item, i) =>
    `<div class="name-suggest-item${i === state.activeIdx ? ' active' : ''}" data-name="${escapeHtmlAttr(item.name)}">
      ${getAttrIcon(item.name, banner)}
      <span class="s-name">${escapeHtml(item.name)}</span>
    </div>`
  ).join('');
  suggest.classList.add('open');
}

function escapeHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function escapeHtmlAttr(s) {
  return escapeHtml(s).replace(/'/g, '&#39;');
}

function pickNameSuggest(state, name) {
  const input = document.getElementById(state.inputId);
  const suggest = document.getElementById(state.suggestId);
  input.value = name;
  suggest.classList.remove('open');
  state.activeIdx = -1;
  if (state.inputId === 'inp-name') {
    updateCharPhotoPreview('char-photo-img', 'char-photo-placeholder', name);
  } else if (state.inputId === 'edit-name') {
    updateCharPhotoPreview('edit-photo-img', 'edit-photo-placeholder', name);
  }
}

function closeNameSuggest(state) {
  const suggest = document.getElementById(state.suggestId);
  if (suggest) suggest.classList.remove('open');
  state.activeIdx = -1;
}

function handleNameSuggestKey(e, state) {
  const suggest = document.getElementById(state.suggestId);
  if (!suggest.classList.contains('open')) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') renderNameSuggest(state);
    return;
  }
  const items = suggest.querySelectorAll('.name-suggest-item');
  if (!items.length) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    state.activeIdx = Math.min(state.activeIdx + 1, items.length - 1);
    updateSuggestActive(state, items);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    state.activeIdx = Math.max(state.activeIdx - 1, 0);
    updateSuggestActive(state, items);
  } else if (e.key === 'Enter' && state.activeIdx >= 0) {
    e.preventDefault();
    pickNameSuggest(state, items[state.activeIdx].dataset.name);
  } else if (e.key === 'Escape') {
    closeNameSuggest(state);
  }
}

function updateSuggestActive(state, items) {
  items.forEach((el, i) => el.classList.toggle('active', i === state.activeIdx));
  if (items[state.activeIdx]) items[state.activeIdx].scrollIntoView({ block: 'nearest' });
}

document.addEventListener('click', (e) => {
  Object.values(namePickerState).forEach(state => {
    const wrap = document.getElementById(state.inputId)?.closest('.name-picker-wrap');
    const filter = document.getElementById(state.filterId);
    if (wrap && !wrap.contains(e.target) && filter && !filter.contains(e.target)) {
      closeNameSuggest(state);
    }
  });
});

const _currentGame = 'zzz';
const currentGame = _currentGame;
const KEY = () => 'zzz_gacha_v4';
let records = [];
// バージョン選択状態
const _verState = {
  zzz: { currentVer: '1', recordVer: '1' },
};
// 後方互換：currentVer / recordVer は現在のゲームのstateへのプロキシ
Object.defineProperty(window, 'currentVer', {
  get() { return _verState[_currentGame].currentVer; },
  set(v) { _verState[_currentGame].currentVer = v; },
});
Object.defineProperty(window, 'recordVer', {
  get() { return _verState[_currentGame].recordVer; },
  set(v) { _verState[_currentGame].recordVer = v; },
});

function recordsForView() {
  return currentVer === 'all' ? records : records.filter(r => r.ver === currentVer);
}
let bannerFilter = '';
let searchQuery = '';
let pendingImport = null;
let firebaseUser = null;
let cloudReady = false;
let cloudSaving = false;

function loadLocal() {
  try { records = JSON.parse(localStorage.getItem(KEY()) || '[]'); } catch(e) { records = []; }
}
function saveLocal() {
  localStorage.setItem(KEY(), JSON.stringify(records));
}

function load() { loadLocal(); }

function save() {
  saveLocal();
  if (firebaseUser && cloudReady) persistCloud();
}

function isFirebaseConfigured() {
  return typeof firebaseConfig !== 'undefined'
    && firebaseConfig.apiKey
    && firebaseConfig.apiKey !== 'YOUR_API_KEY';
}

function setSyncStatus(state) {
  const dot = document.getElementById('sync-dot');
  dot.className = 'sync-dot' + (state ? ' ' + state : '');
  dot.title = state === 'on' ? 'クラウド同期中'
    : state === 'busy' ? '保存中…'
    : 'ローカルのみ';
}

function updateAuthUI(user) {
  const login = document.getElementById('btn-login');
  const logout = document.getElementById('btn-logout');
  const label = document.getElementById('auth-user');
  if (user) {
    login.style.display = 'none';
    logout.style.display = '';
    label.style.display = '';
    label.textContent = user.email || 'ログイン中';
    setSyncStatus(cloudReady ? 'on' : 'busy');
  } else {
    login.style.display = '';
    logout.style.display = 'none';
    label.style.display = 'none';
    setSyncStatus('');
  }
}

function authErrorMessage(e) {
  const code = e && e.code ? e.code : '';
  if (code === 'auth/unauthorized-domain') {
    return 'このサイトのドメインが Firebase で許可されていません';
  }
  if (code === 'auth/popup-blocked') {
    return 'ポップアップがブロックされています。Chrome/Edge で許可するか、ページを再読み込みしてください';
  }
  if (code === 'auth/network-request-failed') {
    return 'ネットワークエラーです。接続を確認してください';
  }
  return 'ログイン失敗: ' + ((e && e.message) || code || '不明なエラー');
}

/** スマホのみ画面遷移。PC/Windows はポップアップ優先（Gmail 選択後に戻れない対策） */
function preferAuthRedirect() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

async function signInGoogle() {
  const btn = document.getElementById('btn-login');
  btn.disabled = false;

  if (location.protocol === 'file:') {
    alert('HTML を直接開いています。\nhttp://localhost:3000 または公開 URL から開いてください。');
    return;
  }
  if (!isFirebaseConfigured()) {
    alert('Firebase の設定が読み込めていません。ページを再読み込みしてください。');
    return;
  }
  if (typeof firebase === 'undefined') {
    flash('Firebase の読み込みに失敗しました。再読み込みしてください', 'err');
    return;
  }

  btn.disabled = true;
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  const finishFail = (e) => {
    console.error(e);
    flash(authErrorMessage(e), 'err');
    btn.disabled = false;
  };

  if (preferAuthRedirect()) {
    flash('Google のログイン画面に移動します…', 'ok');
    try {
      await firebase.auth().signInWithRedirect(provider);
    } catch (e) { finishFail(e); }
    return;
  }

  flash('ポップアップでログインします（ブロックされたら許可）…', 'ok');
  try {
    const result = await firebase.auth().signInWithPopup(provider);
    if (result.user) {
      flash('ログインしました', 'ok');
      try {
        await loadFromCloud(result.user.uid);
      } catch (e) {
        console.error(e);
        flash('ログイン済み・データ読込失敗: ' + authErrorMessage(e), 'err');
        loadLocal();
        renderList();
      }
    }
    btn.disabled = false;
  } catch (e) {
    if (e.code === 'auth/popup-closed-by-user') {
      flash('ログインをキャンセルしました', 'err');
      btn.disabled = false;
      return;
    }
    if (e.code === 'auth/popup-blocked') {
      flash('ポップアップを許可してください。別方式を試します…', 'ok');
      try {
        await firebase.auth().signInWithRedirect(provider);
        return;
      } catch (e2) { finishFail(e2); return; }
    }
    finishFail(e);
  }
}

async function signOutGoogle() {
  if (!isFirebaseConfigured()) return;
  try {
    await firebase.auth().signOut();
    flash('ログアウトしました（この端末のデータは残ります）', 'ok');
  } catch (e) {
    console.error(e);
    flash('ログアウトに失敗しました', 'err');
  }
}

function userDocRef(uid) {
  return firebase.firestore().collection('users').doc(uid);
}

// ゲームごとにFirestoreのフィールドキーを使い分ける
const CLOUD_KEY = () => 'zzz_records';

async function loadFromCloud(uid) {
  cloudReady = false;
  setSyncStatus('busy');
  const snap = await userDocRef(uid).get();
  const cloudKey = CLOUD_KEY();
  const cloudRecords = snap.exists ? (snap.data()[cloudKey] || []) : [];
  loadLocal();
  const localRecords = records.slice();

  if (!cloudRecords.length && localRecords.length) {
    records = localRecords;
    await userDocRef(uid).set({
      [cloudKey]: records,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });
  } else if (cloudRecords.length && !localRecords.length) {
    records = cloudRecords;
    saveLocal();
  } else if (cloudRecords.length && localRecords.length) {
    records = cloudRecords.length >= localRecords.length ? cloudRecords : localRecords;
    saveLocal();
    if (records !== cloudRecords) {
      await userDocRef(uid).set({
        [cloudKey]: records,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      }, { merge: true });
    }
  } else {
    records = cloudRecords;
    saveLocal();
  }
  cloudReady = true;
  setSyncStatus('on');
  renderList();
}

let persistTimer = null;
function persistCloud() {
  if (!firebaseUser || !cloudReady) return;
  clearTimeout(persistTimer);
  persistTimer = setTimeout(async () => {
    cloudSaving = true;
    setSyncStatus('busy');
    const cloudKey = CLOUD_KEY();
    try {
      await userDocRef(firebaseUser.uid).set({
        [cloudKey]: records,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      }, { merge: true });
      setSyncStatus('on');
    } catch (e) {
      console.error(e);
      flash('クラウドへの保存に失敗しました', 'err');
      setSyncStatus('on');
    } finally {
      cloudSaving = false;
    }
  }, 400);
}

function initFirebaseAuth() {
  if (!isFirebaseConfigured()) return;
  firebase.initializeApp(firebaseConfig);
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

  firebase.auth().getRedirectResult()
    .then(async (result) => {
      const btn = document.getElementById('btn-login');
      if (btn) btn.disabled = false;
      if (!result || !result.user) return;
      flash('ログインしました', 'ok');
      try {
        await loadFromCloud(result.user.uid);
      } catch (e) {
        console.error(e);
        flash('ログイン済み・データ読込失敗: ' + authErrorMessage(e), 'err');
        loadLocal();
        renderList();
      }
    })
    .catch((e) => {
      console.error(e);
      const btn = document.getElementById('btn-login');
      if (btn) btn.disabled = false;
      if (e.code && e.code !== 'auth/no-auth-event') {
        flash(authErrorMessage(e), 'err');
        showAuthHelpBanner();
      }
    });

  firebase.auth().onAuthStateChanged(async (user) => {
    const btn = document.getElementById('btn-login');
    if (btn) btn.disabled = false;
    firebaseUser = user;
    updateAuthUI(user);
    if (user) {
      try {
        await loadFromCloud(user.uid);
      } catch (e) {
        console.error(e);
        cloudReady = false;
        loadLocal();
        renderList();
        flash('ログイン済み（' + (user.email || '') + '）・クラウド読込失敗', 'err');
      }
    } else {
      cloudReady = false;
      loadLocal();
      renderList();
    }
  });
}

function showAuthHelpBanner() {
  const el = document.getElementById('auth-help');
  if (el) el.style.display = 'block';
}

function selectVer(el, ver) {
  document.querySelectorAll('.ver-range-btn').forEach(b => b.classList.remove('on'));
  el.classList.add('on');
  currentVer = ver;
  if (ver !== 'all') recordVer = ver;
  renderList();
}

function setBannerFilter(el, val) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('on'));
  el.classList.add('on');
  bannerFilter = val;
  renderList();
}

function onSearchInput(el) {
  searchQuery = el.value.trim();
  const clearBtn = document.getElementById('search-clear');
  if (clearBtn) clearBtn.classList.toggle('visible', searchQuery.length > 0);
  renderList();
}

function clearSearch() {
  const inp = document.getElementById('search-input');
  if (inp) inp.value = '';
  searchQuery = '';
  const clearBtn = document.getElementById('search-clear');
  if (clearBtn) clearBtn.classList.remove('visible');
  renderList();
}

function highlightText(text, query) {
  if (!query || !text) return escapeHtml(text || '');
  const escaped = escapeHtml(text);
  const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return escaped.replace(new RegExp(escapedQuery, 'gi'), m => `<span class="search-highlight">${m}</span>`);
}

function initToggle(groupId) {
  const grp = document.getElementById(groupId);
  grp.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      grp.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      if (groupId === 'grp-banner') onBannerChange(btn.dataset.val);
      if (groupId === 'grp-sim-guarantee') calcProbability();
    });
  });
}

function getVal(groupId) {
  const btn = document.querySelector('#' + groupId + ' .toggle-btn.on');
  return btn ? btn.dataset.val : '';
}

function onBannerChange(val) {
  const isChar = (val === 'agent' || val === 'character');
  const isWpn  = (val === 'weapon');
  document.getElementById('field-lose').style.display     = isChar ? '' : 'none';
  document.getElementById('field-wpn-lose').style.display = isWpn  ? '' : 'none';
  const st = namePickerState['inp-name'];
  if (st) {
    closeNameSuggest(st);
    renderNameSuggest(st);
  }
}

function resetAttrFilter(filterId) {
  const row = document.getElementById(filterId);
  if (!row) return;
  row.querySelectorAll('.attr-filter-btn').forEach(b => {
    b.classList.toggle('on', b.dataset.attr === '');
  });
}

function addRecord() {
  const name   = document.getElementById('inp-name').value.trim();
  const pull   = parseInt(document.getElementById('inp-pull').value);
  const banner = getVal('grp-banner');
  const rarity = getVal('grp-rarity');
  const cons   = getVal('grp-cons');
  const lose    = getVal('grp-lose');
  const wpnLose = getVal('grp-wpn-lose');
  const memo    = (document.getElementById('inp-memo').value || '').trim();

  if (!name)             { flash('名前を入力してください', 'err'); return; }
  if (!pull || pull < 1) { flash('連数を入力してください', 'err'); return; }

  records.unshift({
    id: Date.now(),
    game: _currentGame,
    ver: recordVer,
    banner, name, pull, rarity, cons,
    lose:    (banner === 'agent' || banner === 'character') ? lose    : '-',
    wpnLose: banner === 'weapon' ? wpnLose : '-',
    memo,
  });
  save();
  flash('記録しました', 'ok');
  document.getElementById('inp-name').value = '';
  document.getElementById('inp-pull').value = '';
  document.getElementById('inp-memo').value = '';
  updateCharPhotoPreview('char-photo-img', 'char-photo-placeholder', '');
  renderList();
}

let _undoRecord = null;
let _undoIndex = null;
let _undoTimer = null;

function isDesktopViewport() {
  return window.matchMedia('(min-width: 701px)').matches;
}

function deleteRecord(id) {
  const idx = records.findIndex(r => r.id === id);
  if (idx === -1) return;
  const removed = records[idx];
  records.splice(idx, 1);
  save();
  renderList();

  if (isDesktopViewport()) {
    showUndoToast(removed, idx);
  }
}

function showUndoToast(removedRecord, index) {
  const toast = document.getElementById('undo-toast');
  const msg = document.getElementById('undo-toast-msg');
  if (!toast || !msg) return;

  _undoRecord = removedRecord;
  _undoIndex = index;
  clearTimeout(_undoTimer);

  msg.textContent = `「${removedRecord.name}」を削除しました`;
  toast.classList.add('show');

  _undoTimer = setTimeout(() => {
    toast.classList.remove('show');
    _undoRecord = null;
    _undoIndex = null;
  }, 3000);
}

function undoDelete() {
  if (_undoRecord === null) return;
  clearTimeout(_undoTimer);

  const insertAt = Math.min(_undoIndex, records.length);
  records.splice(insertAt, 0, _undoRecord);
  _undoRecord = null;
  _undoIndex = null;

  save();
  renderList();

  const toast = document.getElementById('undo-toast');
  if (toast) toast.classList.remove('show');
}

const _undoBtn = document.getElementById('undo-toast-btn');
if (_undoBtn) _undoBtn.addEventListener('click', undoDelete);

function flash(msg, type) {
  const el = document.getElementById('flash');
  el.textContent = msg;
  el.className = 'show ' + type;
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 2000);
}

let _dragSrcEl = null;

function enableDragReorder(listEl) {
  const items = listEl.querySelectorAll('.record-item[data-id]');
  items.forEach(item => {
    const handle = item.querySelector('.drag-handle');
    if (!handle) return;

    const arm = () => { item.draggable = true; };
    handle.addEventListener('mousedown', arm);
    handle.addEventListener('touchstart', arm, { passive: true });

    item.addEventListener('dragstart', (e) => {
      _dragSrcEl = item;
      item.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      try { e.dataTransfer.setData('text/plain', item.dataset.id); } catch(err) {}
    });

    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
      item.draggable = false;
      listEl.querySelectorAll('.drag-over-top,.drag-over-bottom').forEach(el => {
        el.classList.remove('drag-over-top', 'drag-over-bottom');
      });
      if (_dragSrcEl) {
        _dragSrcEl = null;
        reorderRecordsByDom();
      }
    });

    item.addEventListener('dragover', (e) => {
      if (!_dragSrcEl || _dragSrcEl === item) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      const rect = item.getBoundingClientRect();
      const before = e.clientY < rect.top + rect.height / 2;
      item.classList.toggle('drag-over-top', before);
      item.classList.toggle('drag-over-bottom', !before);
      listEl.insertBefore(_dragSrcEl, before ? item : item.nextSibling);
    });

    item.addEventListener('dragleave', () => {
      item.classList.remove('drag-over-top', 'drag-over-bottom');
    });

    item.addEventListener('drop', (e) => { e.preventDefault(); });
  });
}

// ドラッグ操作で変わったDOM順を records 配列に反映する
// （現在表示中でない記録は元の相対位置を保ったまま、表示中の記録だけを新しい順序で並び替える）
function reorderRecordsByDom() {
  const listEl = document.getElementById('record-list');
  const items = Array.from(listEl.querySelectorAll('.record-item[data-id]'));
  if (!items.length) return;
  const newOrderIds = items.map(el => Number(el.dataset.id));
  const idSet = new Set(newOrderIds);
  const byId = new Map(records.map(r => [r.id, r]));
  let idx = 0;
  const newRecords = records.map(r => idSet.has(r.id) ? byId.get(newOrderIds[idx++]) : r);
  records = newRecords;
  save();
  renderList();
}


// ===== キャラ図鑑（Sランクのエージェントのみ） =====
// Aランクのエージェントは図鑑に出さない。増減したいときはここを編集してください。
const DEX_A_RANK_AGENTS = ['アンビー','セス','ニコ','ビリー','ベン','蒼角','カリン','ルーシー','パイパー','アンドー'];
function dexKey(s) {
  return String(s || '').trim().normalize('NFKC').toLowerCase();
}

// 履歴パネルの表示切り替え（'list' = 履歴 / 'dex' = 図鑑）
function setHistoryView(mode) {
  const panel = document.querySelector('.history-panel');
  if (!panel) return;
  panel.classList.toggle('dex-mode', mode === 'dex');
  document.querySelectorAll('.view-tab').forEach(b => {
    b.classList.toggle('on', b.dataset.view === mode);
  });
  if (mode === 'dex') renderDex();
}

function renderDex() {
  const grid = document.getElementById('dex-grid');
  const sub = document.getElementById('dex-sub');
  if (!grid) return;

  const aSet = new Set(DEX_A_RANK_AGENTS);
  const entries = AGENT_ROSTER
    .filter(a => !aSet.has(a.name))
    .map(a => ({ name: a.name, owned: false, cons: 0 }));

  // 名前・よみ → 図鑑エントリ（別名で記録していても同じキャラとして数える）
  const keyToEntry = new Map();
  entries.forEach(e => {
    const a = AGENT_ROSTER.find(x => x.name === e.name);
    [a.name, ...(a.aliases || [])].forEach(k => keyToEntry.set(dexKey(k), e));
  });

  // 所持判定は表示中のバージョンに関係なく全記録から行う。凸数は記録の中で最大のもの
  records.forEach(r => {
    if (r.rarity !== 'S') return;
    if (r.banner !== 'agent' && r.banner !== 'character') return;
    const nm = String(r.name || '').trim();
    if (!nm || aSet.has(nm)) return;
    let e = keyToEntry.get(dexKey(nm));
    if (!e) {                       // 名簿にない名前で記録した場合も末尾に追加
      e = { name: nm, owned: false, cons: 0 };
      entries.push(e);
      keyToEntry.set(dexKey(nm), e);
    }
    e.owned = true;
    const c = parseInt(r.cons, 10);
    if (c > e.cons) e.cons = c;
  });

  const ownedCount = entries.filter(e => e.owned).length;
  if (sub) sub.textContent = `所持 ${ownedCount} / ${entries.length}`;

  grid.innerHTML = entries.map(e => {
    const src = getCharPhotoSrc(e.name);
    const img = src
      ? `<img src="${escapeHtml(src)}" alt="" loading="lazy">`
      : PLACEHOLDER_PERSON_SVG;
    const cons = (e.owned && e.cons > 0) ? `<span class="dex-cons">${e.cons}</span>` : '';
    const title = e.owned ? (e.cons > 0 ? `${e.name}（${e.cons}凸）` : e.name) : `${e.name}（未所持）`;
    return `<div class="dex-item${e.owned ? '' : ' unowned'}" title="${escapeHtml(title)}">
      <div class="dex-avatar">${img}${cons}</div>
      <div class="dex-name">${escapeHtml(e.name)}</div>
    </div>`;
  }).join('');
}

function renderList() {
  renderDex();
  let list = recordsForView();
  if (bannerFilter) list = list.filter(r => r.banner === bannerFilter);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(r =>
      (r.name && r.name.toLowerCase().includes(q)) ||
      (r.memo && r.memo.toLowerCase().includes(q))
    );
  }

  const el = document.getElementById('record-list');

  if (!list.length) {
    el.innerHTML = searchQuery
      ? `<div class="empty-state"><div class="e-icon">🔍</div><div>「${escapeHtml(searchQuery)}」は見つかりませんでした</div></div>`
      : '<div class="empty-state"><div class="e-icon">◇</div><div>記録がありません</div></div>';
    document.getElementById('count-label').textContent = '0 件';
    document.getElementById('s-count').textContent = '';
    document.getElementById('stats-wrap').style.display = 'none';
    return;
  }

  const agentRecs  = list.filter(r => r.banner === 'agent' || r.banner === 'character');
  const weaponRecs = list.filter(r => r.banner === 'weapon');

  function makeItem(r) {
    const attrIcon  = getAttrIcon(r.name, r.banner);
    const rareBadge = r.rarity === 'S'
      ? '<span class="badge badge-s">S</span>'
      : '<span class="badge badge-a">A</span>';
    const loseBadge = r.lose === 'win'
      ? '<span class="badge badge-win">確定</span>'
      : r.lose === 'loss'
        ? '<span class="badge badge-loss">すり抜け</span>'
        : r.lose === '-'
          ? '<span class="badge badge-50">50%</span>'
          : '';
    const wpnLoseBadge = r.wpnLose === 'win'
      ? '<span class="badge badge-win">確定</span>'
      : r.wpnLose === 'loss'
        ? '<span class="badge badge-loss">すり抜け</span>'
        : r.wpnLose === '-'
          ? '<span class="badge badge-75">75%</span>'
          : r.wpnLose === 'fate1'
          ? '<span class="badge badge-75">命定値1</span>'
          : r.wpnLose === 'limited'
          ? '<span class="badge badge-win">限定</span>'
          : '';
    const consBadge = (r.cons !== undefined && r.cons !== '0')
      ? `<span class="badge badge-cons">${r.cons}凸</span>` : '';
    const losePart  = (r.banner === 'agent' || r.banner === 'character') ? loseBadge : wpnLoseBadge;
    const displayName = searchQuery ? highlightText(r.name, searchQuery) : escapeHtml(r.name);
    const memoPart = r.memo
      ? `<div class="record-memo">${searchQuery ? highlightText(r.memo, searchQuery) : escapeHtml(r.memo)}</div>`
      : '';

    const pullCls = r.pull >= 1  && r.pull <= 10 ? ' pull-rainbow'
                  : r.pull >= 11 && r.pull <= 59 ? ' pull-safe'
                  : r.pull >= 60 && r.pull <= 79 ? ' pull-caution'
                  : r.pull >= 80               ? ' pull-danger'
                  : '';
    return `<div class="record-item" data-id="${r.id}">
      <div class="drag-handle" title="ドラッグして並び替え">⠿</div>
      ${getRecordAvatarHtml(r.name)}
      <div class="pull-count${pullCls}">${r.pull}<span class="unit">連</span></div>
      <div class="record-info">
        <div class="record-name">${attrIcon} ${displayName} ${rareBadge}${consBadge}${losePart}</div>
        ${memoPart}
      </div>
      <div class="item-actions">
        <button class="btn-edit" onclick="openEdit(${r.id})" title="編集">✎</button>
        <button class="btn-del" onclick="deleteRecord(${r.id})" title="削除">×</button>
      </div>
    </div>`;
  }

  let html = '';
  if (!bannerFilter) {
    if (agentRecs.length) {
      html += '<div class="divider">エージェント</div>';
      html += agentRecs.map(makeItem).join('');
    }
    if (weaponRecs.length) {
      html += '<div class="divider">音動機</div>';
      html += weaponRecs.map(makeItem).join('');
    }
  } else {
    html = list.map(makeItem).join('');
  }

  el.innerHTML = html;
  enableDragReorder(el);

  const allVer = recordsForView();
  const sLabel = 'Sランク';
  // セクションラベル切り替え
  document.getElementById('st-agent-title').textContent  = 'エージェント';
  document.getElementById('st-weapon-title').textContent = '音動機';
  document.getElementById('st-agent-s-label').textContent  = sLabel;
  document.getElementById('st-weapon-s-label').textContent = sLabel;
  const agentBanners = ['agent', 'character'];
  const agentAll  = allVer.filter(r => agentBanners.includes(r.banner));
  const agentSAll = agentAll.filter(r => r.rarity === 'S');
  const agentAvg  = agentSAll.length ? Math.round(agentSAll.reduce((a,r)=>a+r.pull,0)/agentSAll.length) : null;
  const agentLoss = agentSAll.filter(r => r.lose === 'loss').length;
  const agentLossRate = agentSAll.length ? Math.round(agentLoss/agentSAll.length*100) : null;

  // ── 音動機 / 武器統計 ──
  const weaponAll  = allVer.filter(r => r.banner === 'weapon');
  const weaponSAll = weaponAll.filter(r => r.rarity === 'S');
  const weaponAvg  = weaponSAll.length ? Math.round(weaponSAll.reduce((a,r)=>a+r.pull,0)/weaponSAll.length) : null;
  const weaponLoss = weaponSAll.filter(r => r.wpnLose === 'loss').length;
  const weaponLossRate = weaponSAll.length ? Math.round(weaponLoss/weaponSAll.length*100) : null;

  // ── 表示するブロックをフィルターに合わせて出し分け ──
  const wrap       = document.getElementById('stats-wrap');
  const barAgent   = document.getElementById('stats-bar-agent');
  const barWeapon  = document.getElementById('stats-bar-weapon');

  const showAgent  = !bannerFilter || agentBanners.includes(bannerFilter);
  const showWeapon = !bannerFilter || bannerFilter === 'weapon';

  const hasAny = (showAgent && agentAll.length) || (showWeapon && weaponAll.length);
  wrap.style.display = hasAny ? '' : 'none';

  // エージェントブロック
  barAgent.style.display = (showAgent && agentAll.length) ? '' : 'none';
  if (showAgent && agentAll.length) {
    document.getElementById('st-agent-total').innerHTML = agentAll.length + '<span>件</span>';
    document.getElementById('st-agent-s').innerHTML     = agentSAll.length + '<span>件</span>';
    document.getElementById('st-agent-avg').innerHTML   = (agentAvg ?? '-') + '<span>連</span>';
    document.getElementById('st-agent-loss').innerHTML  = (agentLossRate !== null ? agentLossRate : '-') + '<span>%</span>';
  }

  // 音動機ブロック
  barWeapon.style.display = (showWeapon && weaponAll.length) ? '' : 'none';
  if (showWeapon && weaponAll.length) {
    document.getElementById('st-weapon-total').innerHTML = weaponAll.length + '<span>件</span>';
    document.getElementById('st-weapon-s').innerHTML     = weaponSAll.length + '<span>件</span>';
    document.getElementById('st-weapon-avg').innerHTML   = (weaponAvg ?? '-') + '<span>連</span>';
    document.getElementById('st-weapon-loss').innerHTML  = (weaponLossRate !== null ? weaponLossRate : '-') + '<span>%</span>';
  }

  // count-label / s-count は表示中リストベース
  const sCount = list.filter(r => r.rarity === 'S').length;

  document.getElementById('count-label').textContent = list.length + ' 件';
  document.getElementById('s-count').textContent = sCount ? `Sランク ${sCount} 件` : '';

  // データがある場合はグラフセクションを表示可能にし、開いていれば再描画
  const chartSection = document.getElementById('chart-section');
  if (chartSection) {
    chartSection.classList.toggle('visible', recordsForView().some(r => r.rarity === 'S'));
    if (typeof renderCharts === 'function') renderCharts();
  }
}

let editingId = null;

function updateEditLabels() {
  const editS = document.querySelector('#edit-grp-rarity .toggle-btn[data-val="S"]');
  const editA = document.querySelector('#edit-grp-rarity .toggle-btn[data-val="A"]');
  if (editS) editS.textContent = 'Sランク';
  if (editA) editA.textContent = 'Aランク';

  const wWin  = document.querySelector('#edit-grp-wpn-lose .toggle-btn[data-val="win"]');
  const wLoss = document.querySelector('#edit-grp-wpn-lose .toggle-btn[data-val="loss"]');
  const wDash = document.querySelector('#edit-grp-wpn-lose .toggle-btn[data-val="-"]');
  if (wWin) wWin.textContent = '確定';
  if (wLoss) wLoss.textContent = 'すり抜け';
  if (wDash) wDash.textContent = '75%';
}

function openEdit(id) {
  const r = records.find(r => r.id === id);
  if (!r) return;
  updateEditLabels();
  editingId = id;
  document.getElementById('edit-name').value = r.name;
  updateCharPhotoPreview('edit-photo-img', 'edit-photo-placeholder', r.name);
  document.getElementById('edit-pull').value = r.pull;
  document.getElementById('edit-memo').value = r.memo || '';
  setToggle('edit-grp-rarity', r.rarity);
  setToggle('edit-grp-cons', r.cons || '0');
  setToggle('edit-grp-lose', r.lose || 'win');
  setToggle('edit-grp-wpn-lose', r.wpnLose || 'win');
  document.getElementById('edit-field-lose').style.display     = (r.banner === 'agent' || r.banner === 'character') ? '' : 'none';
  document.getElementById('edit-field-wpn-lose').style.display = r.banner === 'weapon' ? '' : 'none';
  document.getElementById('edit-modal').classList.add('open');
  const st = namePickerState['edit-name'];
  if (st) {
    st.attrFilter = '';
    resetAttrFilter(st.filterId);
    closeNameSuggest(st);
  }
}

function closeEdit() {
  editingId = null;
  document.getElementById('edit-modal').classList.remove('open');
}

function saveEdit() {
  const r = records.find(r => r.id === editingId);
  if (!r) return;
  const name = document.getElementById('edit-name').value.trim();
  const pull = parseInt(document.getElementById('edit-pull').value);
  if (!name) { return; }
  if (!pull || pull < 1) { return; }
  r.name    = name;
  r.game    = _currentGame;
  r.pull    = pull;
  r.rarity  = getEditVal('edit-grp-rarity');
  r.cons    = getEditVal('edit-grp-cons');
  r.lose    = (r.banner === 'agent' || r.banner === 'character') ? getEditVal('edit-grp-lose')     : '-';
  r.wpnLose = r.banner === 'weapon' ? getEditVal('edit-grp-wpn-lose') : '-';
  r.memo    = (document.getElementById('edit-memo').value || '').trim();
  save();
  closeEdit();
  renderList();
}

function getEditVal(groupId) {
  const btn = document.querySelector('#' + groupId + ' .toggle-btn.on');
  return btn ? btn.dataset.val : '';
}

function setToggle(groupId, val) {
  document.querySelectorAll('#' + groupId + ' .toggle-btn').forEach(b => {
    b.classList.toggle('on', b.dataset.val === val);
  });
}

// モーダル外クリックで閉じる
document.getElementById('edit-modal').addEventListener('click', function(e) {
  if (e.target === this) closeEdit();
});

// 編集モーダルのトグル初期化
['edit-grp-rarity','edit-grp-cons','edit-grp-lose','edit-grp-wpn-lose'].forEach(id => {
  const grp = document.getElementById(id);
  grp.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      grp.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
    });
  });
});

// ★★★ エクスポート/インポート機能
function exportData() {
  if (!records.length) {
    alert('記録がありません');
    return;
  }
  const blob = new Blob([JSON.stringify(records, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `zzz-gacha-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  flash('エクスポートしました', 'ok');
}

function triggerImport() {
  document.getElementById('import-file-input').click();
}

function handleImportFile(e) {
  const file = e.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const data = JSON.parse(ev.target.result);
      if (!Array.isArray(data)) throw new Error('Invalid format');
      pendingImport = data;
      document.getElementById('import-preview').textContent = `${data.length} 件のデータが見つかりました`;
      document.getElementById('import-modal').classList.add('open');
    } catch (err) {
      alert('ファイルの読み込みに失敗しました。正しいJSONファイルを選択してください。');
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

function confirmImport() {
  if (!pendingImport) return;
  records = pendingImport;
  pendingImport = null;
  save();
  closeImport();
  renderList();
  flash('インポートしました', 'ok');
}

function closeImport() {
  pendingImport = null;
  document.getElementById('import-modal').classList.remove('open');
}

document.getElementById('import-modal').addEventListener('click', function(e) {
  if (e.target === this) closeImport();
});

if (location.protocol === 'file:') {
  document.getElementById('file-warning').style.display = 'block';
  const loginBtn = document.getElementById('btn-login');
  loginBtn.disabled = true;
  loginBtn.title = 'サーバー起動後に http://localhost:3000 から開いてください';
  loginBtn.style.opacity = '0.45';
  loginBtn.style.cursor = 'not-allowed';
}
document.getElementById('btn-login').addEventListener('click', signInGoogle);

// ===== ゲームUI切り替え =====
// ===== 石カウンター =====
const STONE_RATE = {
  zzz: { perPull: 160, unit: 'ポリクロ', title: '💎 石カウンター（ZZZ）' },
};

function updateStoneCalcUI() {
  const cfg = STONE_RATE[_currentGame] || STONE_RATE.zzz;
  const titleEl = document.getElementById('stone-calc-title');
  const unitEl  = document.getElementById('stone-have-unit');
  const haveEl  = document.getElementById('stone-have-label');
  if (titleEl) titleEl.textContent = cfg.title;
  if (unitEl)  unitEl.textContent  = cfg.unit;
  if (haveEl)  haveEl.textContent  = '現在の' + cfg.unit;
  calcStone();

  const simUnitEl = document.getElementById('sim-have-unit');
  const simHaveEl = document.getElementById('sim-have-label');
  if (simUnitEl) simUnitEl.textContent = cfg.unit;
  if (simHaveEl) simHaveEl.textContent = '端数' + cfg.unit;
  calcProbability();
}

function calcStone() {
  const cfg      = STONE_RATE[_currentGame] || STONE_RATE.zzz;
  const target   = parseInt(document.getElementById('stone-pulls')?.value)     || 0;
  const curPulls = parseInt(document.getElementById('stone-cur-pulls')?.value) || 0;
  const haveStone= parseInt(document.getElementById('stone-have')?.value)      || 0;
  const result   = document.getElementById('stone-result');
  if (!result) return;

  if (!target) { result.classList.remove('show'); return; }
  result.classList.add('show');

  // 連数ベースの計算
  const pullDiff   = target - curPulls;   // 正=不足、負=余剰
  const pullOk     = pullDiff <= 0;

  // 石ベースの計算（現在の連数を石換算して加算）
  const haveTotal  = haveStone + curPulls * cfg.perPull; // 石 + 連数を石換算
  const needStone  = target * cfg.perPull;
  const stoneDiff  = haveTotal - needStone;              // 正=余剰、負=不足
  const stoneOk    = stoneDiff >= 0;

  // 連数表示
  document.getElementById('sr-pulls').textContent = target + '連';
  document.getElementById('sr-cur').textContent   = curPulls + '連 + ' + haveStone.toLocaleString() + cfg.unit;

  // 連数の差
  const pullDiffEl    = document.getElementById('sr-pull-diff');
  const pullDiffLabel = document.getElementById('sr-pull-diff-label');
  pullDiffLabel.textContent = pullOk ? '連数の余剰' : '連数の不足';
  if (pullDiff === 0) {
    pullDiffEl.textContent = 'ちょうど！';
    pullDiffEl.className   = 'stone-result-val ok';
  } else {
    pullDiffEl.textContent = (pullOk ? '+' : '') + (-pullDiff) + '連';
    pullDiffEl.className   = 'stone-result-val ' + (pullOk ? 'ok' : 'ng');
  }

  // 石表示
  const hasStoneInput = haveStone > 0;
  document.getElementById('sr-row-need').style.display       = '';
  document.getElementById('sr-row-have').style.display       = hasStoneInput ? '' : 'none';
  document.getElementById('sr-row-stone-diff').style.display = hasStoneInput ? '' : 'none';

  document.getElementById('sr-need').textContent     = needStone.toLocaleString() + ' ' + cfg.unit;
  document.getElementById('sr-have-label').textContent = '現在の石（合計）';
  document.getElementById('sr-have-val').textContent  = haveTotal.toLocaleString() + ' ' + cfg.unit;

  if (hasStoneInput) {
    const stoneDiffEl    = document.getElementById('sr-stone-diff');
    const stoneDiffLabel = document.getElementById('sr-stone-diff-label');
    stoneDiffLabel.textContent = stoneOk ? '余剰' : '不足';
    stoneDiffEl.textContent    = (stoneOk ? '+' : '-') + Math.abs(stoneDiff).toLocaleString() + ' ' + cfg.unit
                                  + '（' + (stoneOk ? '+' : '-') + Math.abs(Math.floor(stoneDiff / cfg.perPull)) + '連）';
    stoneDiffEl.className      = 'stone-result-val ' + (stoneOk ? 'ok' : 'ng');
  }

  // メッセージ
  const msgEl = document.getElementById('sr-msg');
  if (!hasStoneInput) {
    // 石を入力していない場合は連数ベースのメッセージ
    if (pullOk) {
      msgEl.textContent = '✓ あと' + Math.abs(pullDiff) + '連余る！';
      msgEl.className   = 'stone-shortage ok';
    } else {
      msgEl.textContent = '✗ あと' + pullDiff + '連分（' + (pullDiff * cfg.perPull).toLocaleString() + cfg.unit + '）不足';
      msgEl.className   = 'stone-shortage ng';
    }
  } else {
    // 石あり：総合判定
    if (stoneOk) {
      const extraPulls = Math.floor(stoneDiff / cfg.perPull);
      msgEl.textContent = '✓ ' + stoneDiff.toLocaleString() + cfg.unit + '余る（あと' + extraPulls + '連できる！）';
      msgEl.className   = 'stone-shortage ok';
    } else {
      const shortPulls = Math.ceil(Math.abs(stoneDiff) / cfg.perPull);
      msgEl.textContent = '✗ ' + Math.abs(stoneDiff).toLocaleString() + cfg.unit + '不足（' + shortPulls + '連分）';
      msgEl.className   = 'stone-shortage ng';
    }
  }
}

// ===== 限定キャラ確保シミュレーション（モンテカルロ法） =====
// キャラクターバナー（S級）のソフト・ハード天井モデル。
const PITY_MODEL = {
  zzz: { base: 0.006, softStart: 76, hardPity: 90, softStep: 0.06 },
};

// n連目（このガチャの天井カウント上でn回目）の単発排出率を返す
function sRankRate(game, n) {
  const m = PITY_MODEL[game] || PITY_MODEL.zzz;
  if (n >= m.hardPity) return 1;
  if (n >= m.softStart) {
    const p = m.base + (n - m.softStart + 1) * m.softStep;
    return Math.min(1, p);
  }
  return m.base;
}

// 1回分のシミュレーション：現在の天井カウント・確定状態から、
// 与えられた残り回数（budget）以内に限定キャラを引けるかどうかを判定する
function simulateOneRun(game, startPity, startGuarantee, budget) {
  let pity = startPity;
  let guarantee = startGuarantee;
  for (let used = 1; used <= budget; used++) {
    pity++;
    const p = sRankRate(game, pity);
    if (Math.random() < p) {
      // S級（★5）が出た
      if (guarantee || Math.random() < 0.5) {
        return { success: true, pullsUsed: used };
      }
      // すり抜け：次は確定、天井カウントはリセットして続行
      guarantee = true;
      pity = 0;
    }
  }
  return { success: false, pullsUsed: budget };
}

function runMonteCarlo(game, startPity, startGuarantee, budget, trials = 20000) {
  if (budget <= 0) {
    return { prob: 0, avgPullsOnSuccess: null };
  }
  let successCount = 0;
  let pullsSum = 0;
  for (let i = 0; i < trials; i++) {
    const r = simulateOneRun(game, startPity, startGuarantee, budget);
    if (r.success) {
      successCount++;
      pullsSum += r.pullsUsed;
    }
  }
  return {
    prob: successCount / trials,
    avgPullsOnSuccess: successCount > 0 ? pullsSum / successCount : null,
  };
}

function calcProbability() {
  const resultEl = document.getElementById('sim-result');
  if (!resultEl) return;

  const cfg        = STONE_RATE[_currentGame] || STONE_RATE.zzz;
  const curPulls   = parseInt(document.getElementById('sim-cur-pulls')?.value)   || 0;
  const stoneUnits = parseInt(document.getElementById('sim-stone-units')?.value) || 0;
  const haveStone  = parseInt(document.getElementById('sim-have')?.value)        || 0;
  const guaranteed = getVal('grp-sim-guarantee') === 'guaranteed';

  // 石（1個=1連分=perPull）＋端数ポリクロ、両方を連数に変換して合算
  const availPulls = stoneUnits + Math.floor(haveStone / cfg.perPull);

  document.getElementById('sim-avail-pulls').textContent = availPulls;

  if (curPulls <= 0 && stoneUnits <= 0 && haveStone <= 0) {
    resultEl.classList.remove('show');
    return;
  }
  resultEl.classList.add('show');

  const noteEl = document.getElementById('sim-note');
  const probEl = document.getElementById('sim-prob');

  if (availPulls <= 0) {
    probEl.textContent = '—';
    probEl.style.color = 'var(--text-muted)';
    document.getElementById('sim-bar-fill').style.width = '0%';
    document.getElementById('sim-avg-pulls').textContent = '—';
    noteEl.textContent = '石（ポリクロ）を入力すると、追加で引ける回数から確率を計算します。連数だけでは「これ以上引けるか」が分からないため計算できません。';
    return;
  }
  noteEl.textContent = '現在の天井カウントと石の合計から、モンテカルロシミュレーション（2万回試行）で確保確率を推定しています。';

  const { prob, avgPullsOnSuccess } = runMonteCarlo(_currentGame, curPulls, guaranteed, availPulls);
  const pct = Math.round(prob * 1000) / 10; // 小数点1桁

  probEl.textContent = pct + '%';
  probEl.style.color = pct >= 70 ? 'var(--win)' : (pct >= 30 ? 'var(--accent)' : 'var(--loss)');

  document.getElementById('sim-bar-fill').style.width = pct + '%';
  document.getElementById('sim-avg-pulls').textContent = avgPullsOnSuccess !== null ? Math.round(avgPullsOnSuccess) : '—';
}


// ===== テーマ切り替え =====
function toggleTheme() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const next = isLight ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  document.getElementById('btn-theme').textContent = next === 'light' ? '☀️' : '🌙';
  localStorage.setItem('gacha_theme', next);
}
(function() {
  const saved = localStorage.getItem('gacha_theme');
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    const btn = document.getElementById('btn-theme');
    if (btn) btn.textContent = '☀️';
  }
})();

// ===== グラフ機能 =====
let _chartDistAgent  = null;
let _chartDistWeapon = null;
let _chartVer        = null;
let _chartSectionOpen = false;
let _activeChartTab   = 'dist';

function toggleChartSection() {
  _chartSectionOpen = !_chartSectionOpen;
  const sec = document.getElementById('chart-section');
  sec.classList.toggle('open', _chartSectionOpen);
  if (_chartSectionOpen) renderCharts();
}

function switchChartTab(btn, tab) {
  document.querySelectorAll('.chart-tab-btn').forEach(b => b.classList.remove('on'));
  // ヘッダー内のタブボタンも同期
  document.querySelectorAll(`[data-tab="${tab}"]`).forEach(b => b.classList.add('on'));
  document.querySelectorAll('.chart-pane').forEach(p => p.classList.remove('on'));
  document.getElementById('chart-pane-' + tab).classList.add('on');
  _activeChartTab = tab;
  renderCharts();
}

function getChartColors() {
  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  return {
    accent:        isDark ? '#c8a84b' : '#b8922a',
    accentAlpha:   isDark ? 'rgba(200,168,75,0.18)' : 'rgba(184,146,42,0.12)',
    loss:          isDark ? '#e8604b' : '#c83020',
    lossAlpha:     isDark ? 'rgba(232,96,75,0.18)'  : 'rgba(200,48,32,0.12)',
    blue:          isDark ? '#7aa2e8' : '#3a70c8',
    blueAlpha:     isDark ? 'rgba(122,162,232,0.18)' : 'rgba(58,112,200,0.12)',
    text:          isDark ? '#7a7f8e' : '#5a6070',
    grid:          isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
    tooltipBg:     isDark ? '#16181c' : '#ffffff',
    tooltipBorder: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
  };
}

function axisOpts(c, extra) {
  return {
    ticks: { color: c.text, font: { family: "'Orbitron', monospace", size: 10 } },
    grid: { color: c.grid, drawBorder: false },
    border: { display: false },
    ...extra,
  };
}

function tooltipOpts(c, cb) {
  return {
    backgroundColor: c.tooltipBg,
    borderColor: c.tooltipBorder,
    borderWidth: 1,
    titleColor: c.text,
    bodyColor: c.text,
    padding: 10,
    cornerRadius: 6,
    callbacks: cb,
  };
}

function renderCharts() {
  if (!_chartSectionOpen) return;
  if (typeof Chart === 'undefined') return;
  if (_activeChartTab === 'dist') renderDistCharts();
  if (_activeChartTab === 'ver')  renderVerChart();
  updateChartSub();
}

function updateChartSub() {
  const recs = recordsForView().filter(r => r.rarity === 'S');
  const sub  = document.getElementById('chart-outer-sub');
  if (!sub) return;
  sub.textContent = recs.length
    ? `Sランク ${recs.length}件のデータ`
    : '';
}

// ---- 連数分布（エージェント・武器 2列） ----
function renderDistCharts() {
  const c   = getChartColors();
  const sLabel     = 'Sランク';
  const agentLabel = 'エージェント';
  const weaponLabel= '音動機';
  const agentBanners = ['agent', 'character'];
  const allRecs = recordsForView();

  _chartDistAgent  = renderSingleDist({
    recs:      allRecs.filter(r => agentBanners.includes(r.banner) && r.rarity === 'S' && r.pull),
    canvasId:  'chart-dist-agent',
    emptyId:   'chart-dist-agent-empty',
    labelId:   'chart-dist-label-agent',
    labelText: agentLabel + ' — ' + sLabel + '連数分布',
    barColor:  c.accentAlpha,
    barBorder: c.accent,
    hiColor:   c.lossAlpha,
    hiBorder:  c.loss,
    sLabel,
    chartRef:  _chartDistAgent,
    c,
  });

  _chartDistWeapon = renderSingleDist({
    recs:      allRecs.filter(r => r.banner === 'weapon' && r.rarity === 'S' && r.pull),
    canvasId:  'chart-dist-weapon',
    emptyId:   'chart-dist-weapon-empty',
    labelId:   'chart-dist-label-weapon',
    labelText: weaponLabel + ' — ' + sLabel + '連数分布',
    barColor:  c.blueAlpha,
    barBorder: c.blue,
    hiColor:   c.lossAlpha,
    hiBorder:  c.loss,
    sLabel,
    chartRef:  _chartDistWeapon,
    c,
  });
}

function renderSingleDist({ recs, canvasId, emptyId, labelId, labelText, barColor, barBorder, hiColor, hiBorder, sLabel, chartRef, c }) {
  document.getElementById(labelId).textContent = labelText;
  const emptyEl    = document.getElementById(emptyId);
  const canvasWrap = document.getElementById(canvasId)?.parentElement;

  if (recs.length < 2) {
    emptyEl.style.display = '';
    if (canvasWrap) canvasWrap.style.display = 'none';
    if (chartRef) { chartRef.destroy(); }
    return null;
  }
  emptyEl.style.display = 'none';
  if (canvasWrap) canvasWrap.style.display = '';

  const buckets = Array(8).fill(0);
  recs.forEach(r => { buckets[Math.min(Math.floor((r.pull - 1) / 10), 7)]++; });
  const labels = ['1–10','11–20','21–30','31–40','41–50','51–60','61–70','71–80'];

  if (chartRef) { chartRef.destroy(); }
  const ctx = document.getElementById(canvasId)?.getContext('2d');
  if (!ctx) return null;

  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: sLabel,
        data: buckets,
        backgroundColor: buckets.map((_, i) => i >= 4 ? hiColor  : barColor),
        borderColor:     buckets.map((_, i) => i >= 4 ? hiBorder : barBorder),
        borderWidth: 1.5,
        borderRadius: 3,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: tooltipOpts(c, {
          label: ctx => ' ' + ctx.parsed.y + '件',
          afterLabel: ctx => {
            const pct = recs.length ? Math.round(ctx.parsed.y / recs.length * 100) : 0;
            return ' 全体の ' + pct + '%';
          }
        })
      },
      scales: {
        x: axisOpts(c),
        y: axisOpts(c, { beginAtZero: true, ticks: { color: c.text, font: { family: "'Orbitron', monospace", size: 10 }, stepSize: 1 } }),
      }
    }
  });
}

// ---- バージョン別推移 ----
function renderVerChart() {
  const c       = getChartColors();
  const emptyEl = document.getElementById('chart-ver-empty');
  const cw      = document.getElementById('chart-ver')?.parentElement;
  const agentBanners = ['agent', 'character'];

  // バージョン別に集計（ALLバージョンのデータで）
  const verMap = {};
  records.forEach(r => {
    if (!r.ver || r.rarity !== 'S') return;
    if (!verMap[r.ver]) verMap[r.ver] = {
      agentPulls: [], agentLoss: 0, agentTotal: 0,
      weaponPulls:[], weaponLoss: 0, weaponTotal: 0,
    };
    const d = verMap[r.ver];
    if (agentBanners.includes(r.banner)) {
      if (r.pull) d.agentPulls.push(r.pull);
      d.agentTotal++;
      if (r.lose === 'loss') d.agentLoss++;
    } else if (r.banner === 'weapon') {
      if (r.pull) d.weaponPulls.push(r.pull);
      d.weaponTotal++;
      if (r.wpnLose === 'loss') d.weaponLoss++;
    }
  });

  const vers = Object.keys(verMap).sort();
  if (vers.length < 2) {
    emptyEl.style.display = '';
    if (cw) cw.style.display = 'none';
    if (_chartVer) { _chartVer.destroy(); _chartVer = null; }
    return;
  }
  emptyEl.style.display = 'none';
  if (cw) cw.style.display = '';

  const avg = (arr) => arr.length ? Math.round(arr.reduce((a, b) => a + b, 0) / arr.length) : null;
  const rate = (loss, total) => total ? Math.round(loss / total * 100) : null;

  const agentAvg   = vers.map(v => avg(verMap[v].agentPulls));
  const weaponAvg  = vers.map(v => avg(verMap[v].weaponPulls));
  const agentLoss  = vers.map(v => rate(verMap[v].agentLoss, verMap[v].agentTotal));
  const weaponLoss = vers.map(v => rate(verMap[v].weaponLoss, verMap[v].weaponTotal));
  const verLabels  = vers.map(v => 'v' + v);

  const agentLabel  = 'エージェント平均';
  const weaponLabel = '音動機平均';
  const agentLossLabel  = 'エージェントすり抜け%';
  const weaponLossLabel = '音動機すり抜け%';

  if (_chartVer) { _chartVer.destroy(); _chartVer = null; }
  const ctx = document.getElementById('chart-ver')?.getContext('2d');
  if (!ctx) return;

  _chartVer = new Chart(ctx, {
    data: {
      labels: verLabels,
      datasets: [
        {
          type: 'bar',
          label: agentLabel,
          data: agentAvg,
          backgroundColor: c.accentAlpha,
          borderColor: c.accent,
          borderWidth: 1.5,
          borderRadius: 3,
          yAxisID: 'yLeft',
        },
        {
          type: 'bar',
          label: weaponLabel,
          data: weaponAvg,
          backgroundColor: c.blueAlpha,
          borderColor: c.blue,
          borderWidth: 1.5,
          borderRadius: 3,
          yAxisID: 'yLeft',
        },
        {
          type: 'line',
          label: agentLossLabel,
          data: agentLoss,
          borderColor: c.accent,
          backgroundColor: 'transparent',
          pointBackgroundColor: c.accent,
          pointRadius: 4,
          pointHoverRadius: 6,
          tension: 0.35,
          borderWidth: 2,
          borderDash: [4, 3],
          yAxisID: 'yRight',
        },
        {
          type: 'line',
          label: weaponLossLabel,
          data: weaponLoss,
          borderColor: c.blue,
          backgroundColor: 'transparent',
          pointBackgroundColor: c.blue,
          pointRadius: 4,
          pointHoverRadius: 6,
          tension: 0.35,
          borderWidth: 2,
          borderDash: [4, 3],
          yAxisID: 'yRight',
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          align: 'end',
          labels: {
            color: c.text,
            font: { family: "'Orbitron', monospace", size: 10 },
            boxWidth: 10, padding: 10,
          }
        },
        tooltip: tooltipOpts(c, {
          label: ctx => {
            const v = ctx.parsed.y;
            if (v === null || v === undefined) return null;
            if (ctx.datasetIndex <= 1) return ' 平均 ' + v + '連';
            return ' すり抜け ' + v + '%';
          }
        })
      },
      scales: {
        x: axisOpts(c),
        yLeft: axisOpts(c, {
          position: 'left',
          beginAtZero: true,
          title: { display: true, text: '平均連数', color: c.accent, font: { size: 10, family: "'Orbitron', monospace" } },
        }),
        yRight: axisOpts(c, {
          position: 'right',
          beginAtZero: true,
          max: 100,
          grid: { display: false },
          title: { display: true, text: 'すり抜け率 %', color: c.blue, font: { size: 10, family: "'Orbitron', monospace" } },
        }),
      }
    }
  });
}

loadLocal();
initToggle('grp-banner');
initToggle('grp-rarity');
initToggle('grp-cons');
initToggle('grp-lose');
initToggle('grp-wpn-lose');
initToggle('grp-sim-guarantee');

initNamePicker({
  inputId: 'inp-name',
  suggestId: 'inp-suggest',
  filterId: 'inp-attr-filter',
  getBanner: () => getVal('grp-banner'),
});
initNamePicker({
  inputId: 'edit-name',
  suggestId: 'edit-suggest',
  filterId: 'edit-attr-filter',
  getBanner: () => {
    const r = records.find(x => x.id === editingId);
    return r ? r.banner : 'agent';
  },
});
renderList();