TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "cardboardMenu": {
   "fontFamily": "Arial",
   "selectedFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "fontColor": "#FFFFFF",
   "rollOverOpacity": 0.8,
   "id": "Menu_6C91F709_60FE_C8EF_41D7_2595D0840D90",
   "opacity": 0.4,
   "class": "Menu",
   "rollOverFontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "children": [
    {
     "click": "this.mainPlayList.set('selectedIndex', 0)",
     "label": "1. 360 (Acceso) -  GUADUAL",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 1)",
     "label": "2. 360 (HALL) -  GUADUAL",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 2)",
     "label": "3. 360 (SALA) -  GUADUAL",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 3)",
     "label": "4. 360 (COMEDOR) -  GUADUAL",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 4)",
     "label": "5. 360 (COCINA) -  GUADUAL",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 5)",
     "label": "6. 360 (TERRAZA) -  GUADUAL",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 6)",
     "label": "7. 360 (TV) -  GUADUAL",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 7)",
     "label": "8. 360 (GYM) -  GUADUAL",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 8)",
     "label": "9. 360 (CORREDOR) -  GUADUAL -",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 9)",
     "label": "10. 360 (ALCOBA 01) -  GUADUAL",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 10)",
     "label": "10-2. 360 (ALCOBA 02) -  GUADUAL",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 11)",
     "label": "11. 360 (PPAL) -  GUADUAL",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 12)",
     "label": "12. 360 (BAÑO SOCIAL) -  GUADUAL",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 13)",
     "label": "13. 360 (BAÑO HAB 2) -  GUADUAL",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 14)",
     "label": "14. 360 (BAÑO HAB 3) -  GUADUAL",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 15)",
     "label": "15. 360 (BAÑO PPAL) -  GUADUAL",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 16)",
     "label": "16. 360 (OFICINA) -  GUADUAL",
     "class": "MenuItem"
    },
    {
     "click": "this.mainPlayList.set('selectedIndex', 17)",
     "label": "17. 360 (TERRAZA ARRIBA) -  GUADUAL",
     "class": "MenuItem"
    }
   ],
   "rollOverBackgroundColor": "#000000"
  },
  "id": "panorama_6D991633_6039_2AED_41B2_FEBD2E3E1CA4",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6D991633_6039_2AED_41B2_FEBD2E3E1CA4_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_6EC594E1_602B_2F6D_41C1_BA9B4D15E142",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6C48DCDF_6039_7F55_41C2_717CC4E2260F, this.camera_6B2648E5_60FE_D927_41BA_0C444CB722C6); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 18.5,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6D991633_6039_2AED_41B2_FEBD2E3E1CA4_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.19
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6D991633_6039_2AED_41B2_FEBD2E3E1CA4_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6D991633_6039_2AED_41B2_FEBD2E3E1CA4.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_6D991633_6039_2AED_41B2_FEBD2E3E1CA4_t.jpg",
  "label": "1. 360 (Acceso) -  GUADUAL",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "gyroscopeEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": false,
  "class": "PanoramaPlayer",
  "preloadEnabled": false,
  "mouseControlMode": "drag_rotation",
  "touchControlMode": "drag_acceleration",
  "buttonCardboardView": {
   "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
   "minWidth": 1,
   "width": "17.15%",
   "paddingRight": 0,
   "height": "76.75%",
   "mode": "push",
   "maxWidth": 70,
   "paddingBottom": 0,
   "shadow": false,
   "verticalAlign": "middle",
   "class": "IconButton",
   "transparencyActive": false,
   "propagateClick": false,
   "cursor": "hand",
   "horizontalAlign": "center",
   "data": {
    "name": "IconButton8475"
   },
   "maxHeight": 70,
   "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
   "paddingLeft": 0,
   "minHeight": 1,
   "borderRadius": 0,
   "borderSize": 0,
   "backgroundOpacity": 0,
   "paddingTop": 0
  },
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true
 },
 {
  "id": "panorama_6D991633_6039_2AED_41B2_FEBD2E3E1CA4_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_6C91F709_60FE_C8EF_41D7_2595D0840D90",
  "id": "panorama_6C48DCDF_6039_7F55_41C2_717CC4E2260F",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6C48DCDF_6039_7F55_41C2_717CC4E2260F_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_70183717_602B_2AD5_41D4_15AD1E75AE04",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CBB115E_6039_2957_41A2_6AA579FE82CE, this.camera_6CD4C951_60FE_DB7C_41B0_7BE2D893CD22); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 29.3,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6C48DCDF_6039_7F55_41C2_717CC4E2260F_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.19
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_6FDBCC9B_602B_1FDD_41D0_256563144489",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CA23870_603B_276B_41D4_984033B44A26, this.camera_6CE6593E_60FE_DB24_41D7_319592D2316C); this.mainPlayList.set('selectedIndex', 12)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -130.98,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6C48DCDF_6039_7F55_41C2_717CC4E2260F_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.44
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_708541C0_6029_29AB_41D5_4BD958D34DF2",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6D991633_6039_2AED_41B2_FEBD2E3E1CA4, this.camera_6CD97960_60FE_DB5D_41D6_3137B58C7A1E); this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -179.97,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6C48DCDF_6039_7F55_41C2_717CC4E2260F_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.7
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_7134EFEF_6029_1975_41AF_D15E2653DF28",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CBAD279_6039_2B5D_41C3_5B330FE126F9, this.camera_6CF1192C_60FE_DB24_41D0_7CD1E015B559); this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -99.33,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6C48DCDF_6039_7F55_41C2_717CC4E2260F_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.69
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6C48DCDF_6039_7F55_41C2_717CC4E2260F_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6C48DCDF_6039_7F55_41C2_717CC4E2260F.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_6C48DCDF_6039_7F55_41C2_717CC4E2260F_t.jpg",
  "label": "2. 360 (HALL) -  GUADUAL",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_6C48DCDF_6039_7F55_41C2_717CC4E2260F_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_6C91F709_60FE_C8EF_41D7_2595D0840D90",
  "id": "panorama_6CBB115E_6039_2957_41A2_6AA579FE82CE",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6CBB115E_6039_2957_41A2_6AA579FE82CE_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_716A6612_602F_2AAF_41D3_ACB4D9B40932",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CA2D6F2_6039_2B6F_41A6_E774A18A6CFD, this.camera_6B8A7846_60FE_D965_41AA_47E7FC4AAE46); this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -11.65,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CBB115E_6039_2957_41A2_6AA579FE82CE_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.44
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_725C9610_602F_2AAB_41D1_0F20A3F64198",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6C48DCDF_6039_7F55_41C2_717CC4E2260F, this.camera_6B9FB82E_60FE_D925_41CC_975CF0CDA372); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 131.55,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CBB115E_6039_2957_41A2_6AA579FE82CE_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.06
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_7332ACE7_602F_1F75_41CE_1A99B241C8A8",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CA2222B_6039_2AFD_41D1_993115F2EDEC, this.camera_6B804840_60FE_D95D_41D7_103B6F96E01A); this.mainPlayList.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -96.06,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CBB115E_6039_2957_41A2_6AA579FE82CE_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.44
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6CBB115E_6039_2957_41A2_6AA579FE82CE_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6CBB115E_6039_2957_41A2_6AA579FE82CE.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_6CBB115E_6039_2957_41A2_6AA579FE82CE_t.jpg",
  "label": "3. 360 (SALA) -  GUADUAL",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_6CBB115E_6039_2957_41A2_6AA579FE82CE_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_6C91F709_60FE_C8EF_41D7_2595D0840D90",
  "id": "panorama_6CA2D6F2_6039_2B6F_41A6_E774A18A6CFD",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6CA2D6F2_6039_2B6F_41A6_E774A18A6CFD_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_72631BC5_6029_F9B5_41BE_06082054C454",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CBB115E_6039_2957_41A2_6AA579FE82CE, this.camera_6C50E790_60FE_D7FC_41C2_E6687F991162); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 173,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CA2D6F2_6039_2B6F_41A6_E774A18A6CFD_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.44
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_7360A701_6029_6AAD_41D4_85C276912271",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CA71846_6039_26B7_41D3_D5153A7EF3C1, this.camera_6C79F756_60FE_D764_41D2_065E08E1D510); this.mainPlayList.set('selectedIndex', 6)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 6.82,
        "yaw": 64.72,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CA2D6F2_6039_2B6F_41A6_E774A18A6CFD_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 26.19
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_7392CCF5_602B_1F55_41A5_1A5388CEFEEF",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CBF6C89_6039_FFBD_41C9_C9EF96A55DCA, this.camera_6C6CB775_60FE_D724_41D7_3CF60AC89153); this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 83.82,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CA2D6F2_6039_2B6F_41A6_E774A18A6CFD_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.31
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_745E7292_602B_2BAF_41CB_381FAC43D684",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CA2222B_6039_2AFD_41D1_993115F2EDEC, this.camera_6BB757C1_60FE_D75F_41D6_946230CA0E4A); this.mainPlayList.set('selectedIndex', 5)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -145.55,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CA2D6F2_6039_2B6F_41A6_E774A18A6CFD_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.7
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6CA2D6F2_6039_2B6F_41A6_E774A18A6CFD_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6CA2D6F2_6039_2B6F_41A6_E774A18A6CFD.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_6CA2D6F2_6039_2B6F_41A6_E774A18A6CFD_t.jpg",
  "label": "4. 360 (COMEDOR) -  GUADUAL",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_6CA2D6F2_6039_2B6F_41A6_E774A18A6CFD_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_6C91F709_60FE_C8EF_41D7_2595D0840D90",
  "id": "panorama_6CBF6C89_6039_FFBD_41C9_C9EF96A55DCA",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6CBF6C89_6039_FFBD_41C9_C9EF96A55DCA_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_73A2033C_6029_EADB_41C5_994501E12AD3",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CA2D6F2_6039_2B6F_41A6_E774A18A6CFD, this.camera_6C8C5730_60FE_D73C_41C5_6E28BF83ACA0); this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 93.36,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CBF6C89_6039_FFBD_41C9_C9EF96A55DCA_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.44
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6CBF6C89_6039_FFBD_41C9_C9EF96A55DCA_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6CBF6C89_6039_FFBD_41C9_C9EF96A55DCA.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_6CBF6C89_6039_FFBD_41C9_C9EF96A55DCA_t.jpg",
  "label": "5. 360 (COCINA) -  GUADUAL",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_6CBF6C89_6039_FFBD_41C9_C9EF96A55DCA_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_6C91F709_60FE_C8EF_41D7_2595D0840D90",
  "id": "panorama_6CA2222B_6039_2AFD_41D1_993115F2EDEC",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6CA2222B_6039_2AFD_41D1_993115F2EDEC_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_7388259E_6029_29D7_41D3_402298A86540",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CA2D6F2_6039_2B6F_41A6_E774A18A6CFD, this.camera_6C92A9F6_60FE_DB25_41D6_ED125CA6114B); this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 124.26,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CA2222B_6039_2AFD_41D1_993115F2EDEC_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.57
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_748F8F03_6057_1AAD_41D7_352D028C61FA",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CBB115E_6039_2957_41A2_6AA579FE82CE, this.camera_6CA349D9_60FE_DB6F_41C1_048B89EC48CB); this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -179.97,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CA2222B_6039_2AFD_41D1_993115F2EDEC_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.95
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6CA2222B_6039_2AFD_41D1_993115F2EDEC_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6CA2222B_6039_2AFD_41D1_993115F2EDEC.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_6CA2222B_6039_2AFD_41D1_993115F2EDEC_t.jpg",
  "label": "6. 360 (TERRAZA) -  GUADUAL",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_6CA2222B_6039_2AFD_41D1_993115F2EDEC_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_6C91F709_60FE_C8EF_41D7_2595D0840D90",
  "id": "panorama_6CA71846_6039_26B7_41D3_D5153A7EF3C1",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6CA71846_6039_26B7_41D3_D5153A7EF3C1_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_747CADEF_6057_3975_41CD_B7CB2D4CA036",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CA2D6F2_6039_2B6F_41A6_E774A18A6CFD, this.camera_6B0CC91A_60FE_D8EC_41BB_930B18D2521D); this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.56,
        "yaw": 44.37,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CA71846_6039_26B7_41D3_D5153A7EF3C1_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -5.97
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_75632DF1_6057_396D_41AD_7B193F45508F",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CA10D70_6039_796B_41D4_B786950D7478, this.camera_6B2BE8F7_60FE_D923_41CE_8DE22E8B3750); this.mainPlayList.set('selectedIndex', 7)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -15.67,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CA71846_6039_26B7_41D3_D5153A7EF3C1_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.82
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_7580FC07_6059_7EB5_41C5_0F74D6CF4DC9",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CB9B07D_603B_2755_41BA_5339736A43C5, this.camera_6B1FB905_60FE_D8E7_41BB_6B2CFE98B882); this.mainPlayList.set('selectedIndex', 17)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.4,
        "yaw": -68.43,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CA71846_6039_26B7_41D3_D5153A7EF3C1_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 13.13
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6CA71846_6039_26B7_41D3_D5153A7EF3C1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6CA71846_6039_26B7_41D3_D5153A7EF3C1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_6CA71846_6039_26B7_41D3_D5153A7EF3C1_t.jpg",
  "label": "7. 360 (TV) -  GUADUAL",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_6CA71846_6039_26B7_41D3_D5153A7EF3C1_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_6C91F709_60FE_C8EF_41D7_2595D0840D90",
  "id": "panorama_6CA10D70_6039_796B_41D4_B786950D7478",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6CA10D70_6039_796B_41D4_B786950D7478_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_756F5DED_6059_3975_41D4_1D880527B270",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CA71846_6039_26B7_41D3_D5153A7EF3C1, this.camera_6B4FB8C1_60FE_D95F_41B7_EC9A8CCF35F7); this.mainPlayList.set('selectedIndex', 6)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -135.25,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CA10D70_6039_796B_41D4_B786950D7478_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 2.32
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6CA10D70_6039_796B_41D4_B786950D7478_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6CA10D70_6039_796B_41D4_B786950D7478.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_6CA10D70_6039_796B_41D4_B786950D7478_t.jpg",
  "label": "8. 360 (GYM) -  GUADUAL",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_6CA10D70_6039_796B_41D4_B786950D7478_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_6C91F709_60FE_C8EF_41D7_2595D0840D90",
  "id": "panorama_6CBAD279_6039_2B5D_41C3_5B330FE126F9",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6CBAD279_6039_2B5D_41C3_5B330FE126F9_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_751F9A87_6059_1BB5_41D3_8221E3245784",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6C48DCDF_6039_7F55_41C2_717CC4E2260F, this.camera_6BBCB7D3_60FE_D763_41D6_97ED4E5EC591); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 76.78,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CBAD279_6039_2B5D_41C3_5B330FE126F9_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.19
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_7579B7B8_6059_69DB_41C0_C911D288BABA",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CBCF81A_6039_26DF_41D4_70216FA29EB0, this.camera_6BAFA808_60FE_D8ED_41CC_1121FB49F566); this.mainPlayList.set('selectedIndex', 9)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -3.11,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CBAD279_6039_2B5D_41C3_5B330FE126F9_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.19
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_76603925_6059_E6F5_41D0_88C9D23CC09C",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CA3AD5A_603A_F95F_41D6_8390A08EC1B2, this.camera_6BA027F6_60FE_D725_41CD_6C6D4BBE1742); this.mainPlayList.set('selectedIndex', 10)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -17.43,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CBAD279_6039_2B5D_41C3_5B330FE126F9_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.44
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_7593B2F0_6059_2B6B_41A5_317ED000D3D0",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CA3E322_603B_2AEF_41C4_A5D52EB15BE9, this.camera_6BBA97E5_60FE_D727_41B1_E3ED803211E4); this.mainPlayList.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -96.06,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CBAD279_6039_2B5D_41C3_5B330FE126F9_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.06
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6CBAD279_6039_2B5D_41C3_5B330FE126F9_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6CBAD279_6039_2B5D_41C3_5B330FE126F9.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_6CBAD279_6039_2B5D_41C3_5B330FE126F9_t.jpg",
  "label": "9. 360 (CORREDOR) -  GUADUAL -",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_6CBAD279_6039_2B5D_41C3_5B330FE126F9_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_6C91F709_60FE_C8EF_41D7_2595D0840D90",
  "id": "panorama_6CBCF81A_6039_26DF_41D4_70216FA29EB0",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6CBCF81A_6039_26DF_41D4_70216FA29EB0_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_7648BDEF_6059_3975_41BC_7E8AF6C3DAEB",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CBAD279_6039_2B5D_41C3_5B330FE126F9, this.camera_6C7B9A52_60FE_D97C_41D1_8D79024EFFFE); this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 82.81,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CBCF81A_6039_26DF_41D4_70216FA29EB0_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.19
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_765499D2_6029_79AF_41C8_58F75AF34C67",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CB40D63_603B_796C_41C8_FA5B2938B997, this.camera_6C769A39_60FE_D92C_41C7_4DACEA299F6B); this.mainPlayList.set('selectedIndex', 13)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 69.5,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CBCF81A_6039_26DF_41D4_70216FA29EB0_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.7
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6CBCF81A_6039_26DF_41D4_70216FA29EB0_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6CBCF81A_6039_26DF_41D4_70216FA29EB0.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_6CBCF81A_6039_26DF_41D4_70216FA29EB0_t.jpg",
  "label": "10. 360 (ALCOBA 01) -  GUADUAL",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_6CBCF81A_6039_26DF_41D4_70216FA29EB0_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_6C91F709_60FE_C8EF_41D7_2595D0840D90",
  "id": "panorama_6CA3AD5A_603A_F95F_41D6_8390A08EC1B2",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6CA3AD5A_603A_F95F_41D6_8390A08EC1B2_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_76A40354_602B_2AAB_41C5_C52553A1BB74",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CBAD279_6039_2B5D_41C3_5B330FE126F9, this.camera_6CC8A990_60FE_DBFD_41D5_B4C5C8685240); this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -82.49,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CA3AD5A_603A_F95F_41D6_8390A08EC1B2_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.06
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_76B8A20E_602B_2AB7_41D1_4D32C2F15CE4",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CB491B0_603B_29EB_41CF_4D7AB94C59AB, this.camera_6CBD59B4_60FE_DB25_4183_0A9387F35777); this.mainPlayList.set('selectedIndex', 14)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -68.93,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CA3AD5A_603A_F95F_41D6_8390A08EC1B2_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.06
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6CA3AD5A_603A_F95F_41D6_8390A08EC1B2_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6CA3AD5A_603A_F95F_41D6_8390A08EC1B2.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_6CA3AD5A_603A_F95F_41D6_8390A08EC1B2_t.jpg",
  "label": "10-2. 360 (ALCOBA 02) -  GUADUAL",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_6CA3AD5A_603A_F95F_41D6_8390A08EC1B2_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_6C91F709_60FE_C8EF_41D7_2595D0840D90",
  "id": "panorama_6CA3E322_603B_2AEF_41C4_A5D52EB15BE9",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6CA3E322_603B_2AEF_41C4_A5D52EB15BE9_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_773907D6_6029_2957_41D3_979F277F02EC",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CBE0B82_603B_F9AF_41BA_56028F5050A3, this.camera_6B523888_60FE_D9ED_41D7_F94B3D229271); this.mainPlayList.set('selectedIndex', 16)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 6.05,
        "yaw": 33.32,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CA3E322_603B_2AEF_41C4_A5D52EB15BE9_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 37.24
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_77502B83_6029_39AD_41CD_1F2C558FA35C",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CBAD279_6039_2B5D_41C3_5B330FE126F9, this.camera_6B68C884_60FE_D9E5_41D6_289B2ABDCD4C); this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 41.61,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CA3E322_603B_2AEF_41C4_A5D52EB15BE9_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.94
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_787F200F_6029_26B5_41D0_E7AFA1645993",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CB576A9_603B_2BFD_41D3_2FEA2D238C95, this.camera_6B44C8A9_60FE_D92E_41D1_B6B4ED0406B3); this.mainPlayList.set('selectedIndex', 15)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 50.65,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CA3E322_603B_2AEF_41C4_A5D52EB15BE9_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.94
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6CA3E322_603B_2AEF_41C4_A5D52EB15BE9_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6CA3E322_603B_2AEF_41C4_A5D52EB15BE9.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_6CA3E322_603B_2AEF_41C4_A5D52EB15BE9_t.jpg",
  "label": "11. 360 (PPAL) -  GUADUAL",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_6CA3E322_603B_2AEF_41C4_A5D52EB15BE9_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -113.68,
   "class": "PanoramaCameraPosition",
   "pitch": 0.58
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_6C91F709_60FE_C8EF_41D7_2595D0840D90",
  "id": "panorama_6CA23870_603B_276B_41D4_984033B44A26",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6CA23870_603B_276B_41D4_984033B44A26_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_78550E3F_602F_3AD5_41D3_4FE5A7707FB7",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6C48DCDF_6039_7F55_41C2_717CC4E2260F, this.camera_6B96281A_60FE_D8ED_41CB_1741D1D2C75A); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -135.75,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CA23870_603B_276B_41D4_984033B44A26_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.94
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6CA23870_603B_276B_41D4_984033B44A26_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6CA23870_603B_276B_41D4_984033B44A26.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_6CA23870_603B_276B_41D4_984033B44A26_t.jpg",
  "label": "12. 360 (BA\u00d1O SOCIAL) -  GUADUAL",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_6CA23870_603B_276B_41D4_984033B44A26_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 25.58,
   "class": "PanoramaCameraPosition",
   "pitch": -5.47
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_6C91F709_60FE_C8EF_41D7_2595D0840D90",
  "id": "panorama_6CB40D63_603B_796C_41C8_FA5B2938B997",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6CB40D63_603B_796C_41C8_FA5B2938B997_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_780514B8_602F_2FDB_41C9_D113497B8F78",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CBCF81A_6039_26DF_41D4_70216FA29EB0, this.camera_6C764743_60FE_D75C_41D4_5BC4B744FC9D); this.mainPlayList.set('selectedIndex', 9)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.57,
        "yaw": 66.48,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CB40D63_603B_796C_41C8_FA5B2938B997_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.96
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6CB40D63_603B_796C_41C8_FA5B2938B997_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6CB40D63_603B_796C_41C8_FA5B2938B997.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_6CB40D63_603B_796C_41C8_FA5B2938B997_t.jpg",
  "label": "13. 360 (BA\u00d1O HAB 2) -  GUADUAL",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_6CB40D63_603B_796C_41C8_FA5B2938B997_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -65.23,
   "class": "PanoramaCameraPosition",
   "pitch": 0.5
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_6C91F709_60FE_C8EF_41D7_2595D0840D90",
  "id": "panorama_6CB491B0_603B_29EB_41CF_4D7AB94C59AB",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6CB491B0_603B_29EB_41CF_4D7AB94C59AB_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_78DD950E_6029_6EB7_41C3_0DEABE3CEF91",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CA3AD5A_603A_F95F_41D6_8390A08EC1B2, this.camera_6C80BA15_60FE_D8E7_41B0_A0959D71B693); this.mainPlayList.set('selectedIndex', 10)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -66.67,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CB491B0_603B_29EB_41CF_4D7AB94C59AB_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.94
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6CB491B0_603B_29EB_41CF_4D7AB94C59AB_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6CB491B0_603B_29EB_41CF_4D7AB94C59AB.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_6CB491B0_603B_29EB_41CF_4D7AB94C59AB_t.jpg",
  "label": "14. 360 (BA\u00d1O HAB 3) -  GUADUAL",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_6CB491B0_603B_29EB_41CF_4D7AB94C59AB_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 44.31,
   "class": "PanoramaCameraPosition",
   "pitch": 3.61
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_6C91F709_60FE_C8EF_41D7_2595D0840D90",
  "id": "panorama_6CB576A9_603B_2BFD_41D3_2FEA2D238C95",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6CB576A9_603B_2BFD_41D3_2FEA2D238C95_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_789B4EEB_6029_3B7D_41C0_A5EB4169FA3F",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CA3E322_603B_2AEF_41C4_A5D52EB15BE9, this.camera_6B660875_60FE_D924_41D4_5C20F09B6D28); this.mainPlayList.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": -161.38,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CB576A9_603B_2BFD_41D3_2FEA2D238C95_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.57
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6CB576A9_603B_2BFD_41D3_2FEA2D238C95_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6CB576A9_603B_2BFD_41D3_2FEA2D238C95.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_6CB576A9_603B_2BFD_41D3_2FEA2D238C95_t.jpg",
  "label": "15. 360 (BA\u00d1O PPAL) -  GUADUAL",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_6CB576A9_603B_2BFD_41D3_2FEA2D238C95_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 62.48,
   "class": "PanoramaCameraPosition",
   "pitch": 3.48
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_6C91F709_60FE_C8EF_41D7_2595D0840D90",
  "id": "panorama_6CBE0B82_603B_F9AF_41BA_56028F5050A3",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6CBE0B82_603B_F9AF_41BA_56028F5050A3_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_794E01D1_602B_29AD_41B0_719AF5688886",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CA3E322_603B_2AEF_41C4_A5D52EB15BE9, this.camera_6B32C8D4_60FE_D965_41BD_9B674477F507); this.mainPlayList.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.6,
        "yaw": 147.88,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CBE0B82_603B_F9AF_41BA_56028F5050A3_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.82
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6CBE0B82_603B_F9AF_41BA_56028F5050A3_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6CBE0B82_603B_F9AF_41BA_56028F5050A3.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_6CBE0B82_603B_F9AF_41BA_56028F5050A3_t.jpg",
  "label": "16. 360 (OFICINA) -  GUADUAL",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_6CBE0B82_603B_F9AF_41BA_56028F5050A3_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "hfov": 360,
  "cardboardMenu": "this.Menu_6C91F709_60FE_C8EF_41D7_2595D0840D90",
  "id": "panorama_6CB9B07D_603B_2755_41BA_5339736A43C5",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_6CB9B07D_603B_2755_41BA_5339736A43C5_t.jpg",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_79D5D48A_602B_6FBF_41B2_D32F4AE4B1D9",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "maps": [],
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_6CA71846_6039_26B7_41D3_D5153A7EF3C1, this.camera_6B7C0856_60FE_D965_41CC_1FABCCA3A2CA); this.mainPlayList.set('selectedIndex', 6)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "image"
       }
      ],
      "items": [
       {
        "hfov": 7.57,
        "yaw": -132.24,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 135,
           "url": "media/panorama_6CB9B07D_603B_2755_41BA_5339736A43C5_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -5.21
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_6CB9B07D_603B_2755_41BA_5339736A43C5_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_6CB9B07D_603B_2755_41BA_5339736A43C5.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfovMax": 100,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_6CB9B07D_603B_2755_41BA_5339736A43C5_t.jpg",
  "label": "17. 360 (TERRAZA ARRIBA) -  GUADUAL",
  "partial": false,
  "class": "Panorama",
  "vfov": 180,
  "hfovMin": 100
 },
 {
  "id": "panorama_6CB9B07D_603B_2755_41BA_5339736A43C5_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_6D991633_6039_2AED_41B2_FEBD2E3E1CA4",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6D991633_6039_2AED_41B2_FEBD2E3E1CA4_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_6C48DCDF_6039_7F55_41C2_717CC4E2260F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6C48DCDF_6039_7F55_41C2_717CC4E2260F_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_6CBB115E_6039_2957_41A2_6AA579FE82CE",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CBB115E_6039_2957_41A2_6AA579FE82CE_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_6CA2D6F2_6039_2B6F_41A6_E774A18A6CFD",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CA2D6F2_6039_2B6F_41A6_E774A18A6CFD_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_6CBF6C89_6039_FFBD_41C9_C9EF96A55DCA",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CBF6C89_6039_FFBD_41C9_C9EF96A55DCA_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_6CA2222B_6039_2AFD_41D1_993115F2EDEC",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CA2222B_6039_2AFD_41D1_993115F2EDEC_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_6CA71846_6039_26B7_41D3_D5153A7EF3C1",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CA71846_6039_26B7_41D3_D5153A7EF3C1_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_6CA10D70_6039_796B_41D4_B786950D7478",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CA10D70_6039_796B_41D4_B786950D7478_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_6CBAD279_6039_2B5D_41C3_5B330FE126F9",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CBAD279_6039_2B5D_41C3_5B330FE126F9_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_6CBCF81A_6039_26DF_41D4_70216FA29EB0",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CBCF81A_6039_26DF_41D4_70216FA29EB0_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_6CA3AD5A_603A_F95F_41D6_8390A08EC1B2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CA3AD5A_603A_F95F_41D6_8390A08EC1B2_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_6CA3E322_603B_2AEF_41C4_A5D52EB15BE9",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CA3E322_603B_2AEF_41C4_A5D52EB15BE9_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "media": "this.panorama_6CA23870_603B_276B_41D4_984033B44A26",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CA23870_603B_276B_41D4_984033B44A26_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "media": "this.panorama_6CB40D63_603B_796C_41C8_FA5B2938B997",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CB40D63_603B_796C_41C8_FA5B2938B997_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "media": "this.panorama_6CB491B0_603B_29EB_41CF_4D7AB94C59AB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CB491B0_603B_29EB_41CF_4D7AB94C59AB_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "media": "this.panorama_6CB576A9_603B_2BFD_41D3_2FEA2D238C95",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CB576A9_603B_2BFD_41D3_2FEA2D238C95_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "media": "this.panorama_6CBE0B82_603B_F9AF_41BA_56028F5050A3",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CBE0B82_603B_F9AF_41BA_56028F5050A3_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_6CB9B07D_603B_2755_41BA_5339736A43C5",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CB9B07D_603B_2755_41BA_5339736A43C5_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 0)",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
    "media": "this.panorama_6D991633_6039_2AED_41B2_FEBD2E3E1CA4",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6D991633_6039_2AED_41B2_FEBD2E3E1CA4_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
    "media": "this.panorama_6C48DCDF_6039_7F55_41C2_717CC4E2260F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6C48DCDF_6039_7F55_41C2_717CC4E2260F_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
    "media": "this.panorama_6CBB115E_6039_2957_41A2_6AA579FE82CE",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CBB115E_6039_2957_41A2_6AA579FE82CE_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
    "media": "this.panorama_6CA2D6F2_6039_2B6F_41A6_E774A18A6CFD",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CA2D6F2_6039_2B6F_41A6_E774A18A6CFD_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
    "media": "this.panorama_6CBF6C89_6039_FFBD_41C9_C9EF96A55DCA",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CBF6C89_6039_FFBD_41C9_C9EF96A55DCA_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
    "media": "this.panorama_6CA2222B_6039_2AFD_41D1_993115F2EDEC",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CA2222B_6039_2AFD_41D1_993115F2EDEC_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
    "media": "this.panorama_6CA71846_6039_26B7_41D3_D5153A7EF3C1",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CA71846_6039_26B7_41D3_D5153A7EF3C1_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
    "media": "this.panorama_6CA10D70_6039_796B_41D4_B786950D7478",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CA10D70_6039_796B_41D4_B786950D7478_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
    "media": "this.panorama_6CBAD279_6039_2B5D_41C3_5B330FE126F9",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CBAD279_6039_2B5D_41C3_5B330FE126F9_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 10)",
    "media": "this.panorama_6CBCF81A_6039_26DF_41D4_70216FA29EB0",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CBCF81A_6039_26DF_41D4_70216FA29EB0_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 10, 11)",
    "media": "this.panorama_6CA3AD5A_603A_F95F_41D6_8390A08EC1B2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CA3AD5A_603A_F95F_41D6_8390A08EC1B2_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 11, 12)",
    "media": "this.panorama_6CA3E322_603B_2AEF_41C4_A5D52EB15BE9",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CA3E322_603B_2AEF_41C4_A5D52EB15BE9_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 12, 13)",
    "media": "this.panorama_6CA23870_603B_276B_41D4_984033B44A26",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CA23870_603B_276B_41D4_984033B44A26_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 13, 14)",
    "media": "this.panorama_6CB40D63_603B_796C_41C8_FA5B2938B997",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CB40D63_603B_796C_41C8_FA5B2938B997_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 14, 15)",
    "media": "this.panorama_6CB491B0_603B_29EB_41CF_4D7AB94C59AB",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CB491B0_603B_29EB_41CF_4D7AB94C59AB_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 15, 16)",
    "media": "this.panorama_6CB576A9_603B_2BFD_41D3_2FEA2D238C95",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CB576A9_603B_2BFD_41D3_2FEA2D238C95_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 16, 17)",
    "media": "this.panorama_6CBE0B82_603B_F9AF_41BA_56028F5050A3",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CBE0B82_603B_F9AF_41BA_56028F5050A3_camera",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 17, 0)",
    "media": "this.panorama_6CB9B07D_603B_2755_41BA_5339736A43C5",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_6CB9B07D_603B_2755_41BA_5339736A43C5_camera",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.Menu_6C91F709_60FE_C8EF_41D7_2595D0840D90",
 {
  "id": "camera_6C8C5730_60FE_D73C_41C5_6E28BF83ACA0",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -96.18,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6C764743_60FE_D75C_41D4_5BC4B744FC9D",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -110.5,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6C79F756_60FE_D764_41D2_065E08E1D510",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -135.63,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6C6CB775_60FE_D724_41D7_3CF60AC89153",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -86.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6C50E790_60FE_D7FC_41C2_E6687F991162",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 168.35,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6BB757C1_60FE_D75F_41D6_946230CA0E4A",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -55.74,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6BBCB7D3_60FE_D763_41D6_97ED4E5EC591",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 80.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6BBA97E5_60FE_D727_41B1_E3ED803211E4",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -138.39,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6BA027F6_60FE_D725_41CD_6C6D4BBE1742",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 97.51,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6BAFA808_60FE_D8ED_41CC_1121FB49F566",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -97.19,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6B96281A_60FE_D8ED_41CB_1741D1D2C75A",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 49.02,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6B9FB82E_60FE_D925_41CC_975CF0CDA372",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -150.7,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6B804840_60FE_D95D_41D7_103B6F96E01A",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0.03,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6B8A7846_60FE_D965_41AA_47E7FC4AAE46",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -7,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6B7C0856_60FE_D965_41CC_1FABCCA3A2CA",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 111.57,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6B660875_60FE_D924_41D4_5C20F09B6D28",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -129.35,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6B68C884_60FE_D9E5_41D6_289B2ABDCD4C",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 83.94,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6B523888_60FE_D9ED_41D7_F94B3D229271",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -32.12,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6B44C8A9_60FE_D92E_41D1_B6B4ED0406B3",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 18.62,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6B4FB8C1_60FE_D95F_41B7_EC9A8CCF35F7",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 164.33,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6B32C8D4_60FE_D965_41BD_9B674477F507",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -146.68,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6B2648E5_60FE_D927_41BA_0C444CB722C6",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 0.03,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6B2BE8F7_60FE_D923_41CE_8DE22E8B3750",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 44.75,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6B1FB905_60FE_D8E7_41BB_6B2CFE98B882",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 47.76,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6B0CC91A_60FE_D8EC_41BB_930B18D2521D",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -115.28,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6CF1192C_60FE_DB24_41D0_7CD1E015B559",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -103.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6CE6593E_60FE_DB24_41D7_319592D2316C",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 44.25,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6CD4C951_60FE_DB7C_41B0_7BE2D893CD22",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -48.45,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6CD97960_60FE_DB5D_41D6_3137B58C7A1E",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -161.5,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6CC8A990_60FE_DBFD_41D5_B4C5C8685240",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 162.57,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6CBD59B4_60FE_DB25_4183_0A9387F35777",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 113.33,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6CA349D9_60FE_DB6F_41C1_048B89EC48CB",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 83.94,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6C92A9F6_60FE_DB25_41D6_ED125CA6114B",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 34.45,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6C80BA15_60FE_D8E7_41B0_A0959D71B693",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 111.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6C769A39_60FE_D92C_41C7_4DACEA299F6B",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": -113.52,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "id": "camera_6C7B9A52_60FE_D97C_41D1_8D79024EFFFE",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 100,
   "yaw": 176.89,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  }
 },
 {
  "thumbnailUrl": "media/photo_3CEF1678_3029_2E72_41A4_8E51D9193BD6_t.jpg",
  "label": "1. EXT 1 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_3CEF1678_3029_2E72_41A4_8E51D9193BD6",
  "class": "Photo",
  "height": 2000,
  "image": {
   "levels": [
    {
     "url": "media/photo_3CEF1678_3029_2E72_41A4_8E51D9193BD6.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 },
 {
  "thumbnailUrl": "media/photo_69911068_602B_277B_41D5_37B1B4421809_t.jpg",
  "label": "2. EXT 2 - CABA\u00d1A VT1",
  "width": 8000,
  "id": "photo_69911068_602B_277B_41D5_37B1B4421809",
  "class": "Photo",
  "height": 4000,
  "image": {
   "levels": [
    {
     "url": "media/photo_69911068_602B_277B_41D5_37B1B4421809.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 },
 {
  "thumbnailUrl": "media/photo_3C68330A_3029_6796_4189_379A96D8811E_t.jpg",
  "label": "3. EXT 3 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_3C68330A_3029_6796_4189_379A96D8811E",
  "class": "Photo",
  "height": 2000,
  "image": {
   "levels": [
    {
     "url": "media/photo_3C68330A_3029_6796_4189_379A96D8811E.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 },
 {
  "thumbnailUrl": "media/photo_3C6B890D_3029_63AD_41C6_729DBC1A71F1_t.jpg",
  "label": "4. INT 1 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_3C6B890D_3029_63AD_41C6_729DBC1A71F1",
  "class": "Photo",
  "height": 2000,
  "image": {
   "levels": [
    {
     "url": "media/photo_3C6B890D_3029_63AD_41C6_729DBC1A71F1.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 },
 {
  "thumbnailUrl": "media/photo_3C11CE8B_3029_7E95_41B1_4FFC2D6AA3C3_t.jpg",
  "label": "5. INT 2 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_3C11CE8B_3029_7E95_41B1_4FFC2D6AA3C3",
  "class": "Photo",
  "height": 2000,
  "image": {
   "levels": [
    {
     "url": "media/photo_3C11CE8B_3029_7E95_41B1_4FFC2D6AA3C3.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 },
 {
  "thumbnailUrl": "media/photo_3C15A3F8_3029_6672_41B3_1561DE53E77F_t.jpg",
  "label": "6. EXT 4 - CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_3C15A3F8_3029_6672_41B3_1561DE53E77F",
  "class": "Photo",
  "height": 2000,
  "image": {
   "levels": [
    {
     "url": "media/photo_3C15A3F8_3029_6672_41B3_1561DE53E77F.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 },
 {
  "thumbnailUrl": "media/photo_3C10B992_3029_62B6_41A7_459BC8FDFCA9_t.jpg",
  "label": "7. INT 3- CABA\u00d1A VT1",
  "width": 4000,
  "id": "photo_3C10B992_3029_62B6_41A7_459BC8FDFCA9",
  "class": "Photo",
  "height": 2000,
  "image": {
   "levels": [
    {
     "url": "media/photo_3C10B992_3029_62B6_41A7_459BC8FDFCA9.jpg",
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "duration": 5000
 }
], "children": [
 {
  "progressBackgroundOpacity": 1,
  "toolTipBackgroundColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "paddingRight": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipTextShadowBlurRadius": 3,
  "progressBarOpacity": 1,
  "toolTipTextShadowVerticalLength": 0,
  "progressBottom": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeight": 10,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "shadow": false,
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 0,
  "progressHeight": 10,
  "playbackBarHeadWidth": 6,
  "progressBorderRadius": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipOpacity": 0.7,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColorDirection": "vertical",
  "progressLeft": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipPaddingTop": 9,
  "toolTipBorderColor": "#767676",
  "toolTipTextShadowHorizontalLength": 0,
  "playbackBarProgressOpacity": 1,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "borderSize": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarRight": 0,
  "minHeight": 50,
  "playbackBarBorderSize": 0,
  "progressBarBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "transitionDuration": 500,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarLeft": 0,
  "paddingTop": 0,
  "toolTipBorderRadius": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowSpread": 0,
  "minWidth": 100,
  "playbackBarBorderColor": "#FFFFFF",
  "width": "100%",
  "height": "100%",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipBorderSize": 0,
  "paddingBottom": 0,
  "playbackBarHeadHeight": 15,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "toolTipPaddingLeft": 14,
  "toolTipFontSize": 13,
  "progressBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#FFFFFF",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderRadius": 0,
  "progressBarBorderRadius": 0,
  "top": 0,
  "propagateClick": false,
  "playbackBarHeadBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipShadowOpacity": 0,
  "toolTipPaddingRight": 14,
  "playbackBarBottom": 5,
  "progressOpacity": 1,
  "progressRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBarBorderColor": "#000000",
  "paddingLeft": 0,
  "id": "MainViewer",
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowColor": "#000000",
  "left": 0,
  "playbackBarHeadOpacity": 1,
  "transitionMode": "blending",
  "toolTipFontFamily": "Arial",
  "toolTipPaddingBottom": 9,
  "borderRadius": 0,
  "toolTipTextShadowOpacity": 1,
  "progressBorderColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical"
 },
 {
  "children": [
   {
    "children": [
     "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
     {
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
      "minWidth": 1,
      "toolTipBackgroundColor": "#000000",
      "width": "17.48%",
      "paddingRight": 0,
      "height": "76.75%",
      "mode": "toggle",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipTextShadowVerticalLength": 0,
      "maxWidth": 70,
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "shadow": false,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "class": "IconButton",
      "toolTipDisplayTime": 600,
      "toolTipOpacity": 0.7,
      "toolTip": "Full Screen",
      "toolTipShadowOpacity": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowColor": "#333333",
      "toolTipFontColor": "#FFFFFF",
      "transparencyActive": true,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "Icon fullscreen"
      },
      "maxHeight": 70,
      "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
      "paddingLeft": 0,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipFontFamily": "Arial",
      "minHeight": 1,
      "borderRadius": 0,
      "borderSize": 0,
      "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
      "toolTipPaddingBottom": 9,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "paddingTop": 0
     },
     {
      "toolTipBorderRadius": 1,
      "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
      "minWidth": 1,
      "toolTipBackgroundColor": "#000000",
      "width": "17.15%",
      "paddingRight": 0,
      "height": "76.75%",
      "mode": "toggle",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipTextShadowVerticalLength": 0,
      "maxWidth": 70,
      "paddingBottom": 0,
      "toolTipBorderSize": 0,
      "toolTipFontWeight": "normal",
      "toolTipFontStyle": "normal",
      "shadow": false,
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 14,
      "toolTipFontSize": 13,
      "verticalAlign": "middle",
      "class": "IconButton",
      "toolTipDisplayTime": 600,
      "toolTipOpacity": 0.7,
      "toolTip": "Audio On/Off",
      "toolTipShadowOpacity": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowColor": "#333333",
      "toolTipFontColor": "#FFFFFF",
      "transparencyActive": true,
      "propagateClick": false,
      "cursor": "hand",
      "horizontalAlign": "center",
      "toolTipPaddingTop": 9,
      "toolTipBorderColor": "#767676",
      "toolTipPaddingRight": 14,
      "data": {
       "name": "Icon audio"
      },
      "maxHeight": 70,
      "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
      "paddingLeft": 0,
      "toolTipTextShadowHorizontalLength": 0,
      "toolTipFontFamily": "Arial",
      "minHeight": 1,
      "borderRadius": 0,
      "borderSize": 0,
      "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
      "toolTipPaddingBottom": 9,
      "backgroundOpacity": 0,
      "toolTipTextShadowOpacity": 1,
      "toolTipShadowSpread": 0,
      "paddingTop": 0
     }
    ],
    "gap": 10,
    "minWidth": 1,
    "scrollBarVisible": "rollOver",
    "width": "75.269%",
    "paddingRight": 0,
    "height": "100%",
    "overflow": "visible",
    "paddingBottom": 0,
    "shadow": false,
    "scrollBarWidth": 10,
    "verticalAlign": "middle",
    "class": "Container",
    "scrollBarMargin": 2,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "horizontalAlign": "right",
    "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
    "data": {
     "name": "-Hide buttons"
    },
    "layout": "horizontal",
    "scrollBarColor": "#000000",
    "creationPolicy": "delayed",
    "paddingLeft": 0,
    "borderSize": 0,
    "minHeight": 1,
    "borderRadius": 0,
    "backgroundOpacity": 0,
    "contentOpaque": false,
    "paddingTop": 0
   }
  ],
  "gap": 1,
  "minWidth": 265,
  "scrollBarVisible": "rollOver",
  "width": "22.545%",
  "paddingRight": 0,
  "overflow": "visible",
  "paddingBottom": 0,
  "class": "Container",
  "shadow": false,
  "scrollBarWidth": 10,
  "verticalAlign": "middle",
  "top": "89%",
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "bottom": "3%",
  "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
  "scrollBarMargin": 2,
  "data": {
   "name": "--Settings Button Set"
  },
  "layout": "horizontal",
  "horizontalAlign": "right",
  "scrollBarColor": "#000000",
  "creationPolicy": "delayed",
  "paddingLeft": 0,
  "borderSize": 0,
  "minHeight": 50,
  "borderRadius": 5,
  "right": 25,
  "contentOpaque": false,
  "backgroundOpacity": 0,
  "paddingTop": 0
 },
 {
  "gap": 10,
  "minWidth": 300,
  "scrollBarVisible": "rollOver",
  "width": "21%",
  "paddingRight": 0,
  "height": "25%",
  "overflow": "visible",
  "paddingBottom": 0,
  "shadow": false,
  "scrollBarWidth": 10,
  "verticalAlign": "top",
  "class": "Container",
  "top": "3.5%",
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "horizontalAlign": "left",
  "id": "Container_82CEEC30_9220_D3AB_41D9_A91DB817BCCC",
  "scrollBarMargin": 2,
  "data": {
   "name": "--Stickers Container"
  },
  "layout": "vertical",
  "scrollBarColor": "#000000",
  "creationPolicy": "delayed",
  "paddingLeft": 0,
  "borderSize": 0,
  "minHeight": 120,
  "left": "2.14%",
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "contentOpaque": false,
  "paddingTop": 0
 },
 {
  "selectedItemThumbnailShadow": true,
  "backgroundOpacity": 0.25,
  "selectedItemThumbnailShadowOpacity": 0.73,
  "backgroundColor": [
   "#000000"
  ],
  "itemHorizontalAlign": "center",
  "itemBackgroundColorDirection": "vertical",
  "paddingRight": 15,
  "itemBackgroundColor": [],
  "itemLabelHorizontalAlign": "center",
  "selectedItemThumbnailShadowBlurRadius": 10,
  "backgroundColorRatios": [
   0
  ],
  "maxWidth": 150,
  "selectedItemBackgroundColorRatios": [],
  "shadow": false,
  "itemBorderRadius": 0,
  "itemPaddingTop": 3,
  "selectedItemLabelFontWeight": "bold",
  "itemLabelFontFamily": "Arial",
  "itemLabelPosition": "bottom",
  "rollOverItemLabelFontColor": "#FFFFFF",
  "scrollBarMargin": 4,
  "scrollBarOpacity": 1,
  "itemThumbnailShadow": false,
  "scrollBarColor": "#52B7EF",
  "layout": "vertical",
  "selectedItemBackgroundColor": [],
  "itemBackgroundOpacity": 0,
  "selectedItemBorderRadius": 0,
  "itemThumbnailWidth": 80,
  "borderSize": 0,
  "minHeight": 1,
  "rollOverItemLabelFontWeight": "bold",
  "itemLabelGap": 9,
  "itemLabelFontColor": "#FFFFFF",
  "backgroundColorDirection": "vertical",
  "paddingTop": 20,
  "gap": 10,
  "itemThumbnailBorderRadius": 50,
  "itemPaddingLeft": 3,
  "minWidth": 1,
  "itemVerticalAlign": "middle",
  "itemOpacity": 1,
  "selectedItemLabelFontStyle": "italic",
  "itemThumbnailOpacity": 1,
  "selectedItemThumbnailShadowHorizontalLength": 0,
  "selectedItemBorderSize": 0,
  "selectedItemBackgroundOpacity": 0,
  "itemThumbnailScaleMode": "fit_outside",
  "paddingBottom": 20,
  "scrollBarWidth": 7,
  "height": "82.127%",
  "class": "ThumbnailList",
  "itemPaddingRight": 3,
  "verticalAlign": "top",
  "selectedItemLabelTextDecoration": "underline",
  "top": "3.5%",
  "itemLabelFontWeight": "normal",
  "rollOverItemLabelTextDecoration": "underline",
  "itemLabelTextDecoration": "none",
  "visible": false,
  "itemLabelFontStyle": "normal",
  "propagateClick": false,
  "itemPaddingBottom": 3,
  "horizontalAlign": "left",
  "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
  "data": {
   "name": "-ThumbnailList"
  },
  "itemMode": "normal",
  "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "selectedItemThumbnailShadowVerticalLength": 0,
  "paddingLeft": 15,
  "itemThumbnailHeight": 80,
  "itemBackgroundColorRatios": [],
  "selectedItemLabelFontColor": "#FFFFFF",
  "selectedItemLabelFontSize": 12,
  "borderRadius": 3,
  "itemLabelFontSize": 12,
  "scrollBarVisible": "rollOver",
  "right": "2%"
 },
 {
  "children": [
   {
    "gap": 10,
    "minWidth": 1,
    "scrollBarVisible": "rollOver",
    "width": "100%",
    "paddingRight": 0,
    "height": "55.435%",
    "overflow": "visible",
    "paddingBottom": 0,
    "shadow": false,
    "scrollBarWidth": 10,
    "verticalAlign": "middle",
    "class": "Container",
    "scrollBarMargin": 2,
    "propagateClick": false,
    "scrollBarOpacity": 0.5,
    "horizontalAlign": "left",
    "id": "Container_8BEA9761_974D_B047_41DA_8D05A7FEFD9B",
    "data": {
     "name": "Container Content"
    },
    "layout": "horizontal",
    "scrollBarColor": "#000000",
    "creationPolicy": "delayed",
    "paddingLeft": 0,
    "borderSize": 0,
    "minHeight": 1,
    "borderRadius": 0,
    "backgroundOpacity": 0,
    "contentOpaque": false,
    "paddingTop": 0
   }
  ],
  "gap": 1,
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "width": "37.394%",
  "paddingRight": 0,
  "height": 92,
  "overflow": "visible",
  "paddingBottom": 0,
  "shadow": false,
  "scrollBarWidth": 10,
  "verticalAlign": "bottom",
  "class": "Container",
  "scrollBarMargin": 2,
  "propagateClick": false,
  "scrollBarOpacity": 0.5,
  "bottom": "3%",
  "id": "Container_8A3F064F_9747_905B_41D4_9169FB3EB41E",
  "data": {
   "name": "-Discover Container"
  },
  "layout": "vertical",
  "horizontalAlign": "left",
  "scrollBarColor": "#000000",
  "creationPolicy": "delayed",
  "paddingLeft": 0,
  "borderSize": 0,
  "minHeight": 1,
  "left": "2%",
  "borderRadius": 0,
  "backgroundOpacity": 0,
  "contentOpaque": false,
  "paddingTop": 0
 },
 {
  "minWidth": 1,
  "paddingRight": 0,
  "height": "5.217%",
  "url": "skin/Image_7AD6A4F4_605B_6F6B_41BC_CFBFF53F3822.png",
  "maxWidth": 485,
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "class": "Image",
  "shadow": false,
  "verticalAlign": "middle",
  "top": "0.78%",
  "propagateClick": false,
  "horizontalAlign": "center",
  "data": {
   "name": "Image43017"
  },
  "maxHeight": 265,
  "id": "Image_7AD6A4F4_605B_6F6B_41BC_CFBFF53F3822",
  "paddingLeft": 0,
  "minHeight": 1,
  "left": "93.81%",
  "borderSize": 0,
  "borderRadius": 0,
  "right": "1.06%",
  "backgroundOpacity": 0,
  "paddingTop": 0
 }
], 
 "start": "this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "gap": 10,
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "paddingRight": 0,
 "height": "100%",
 "overflow": "visible",
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "class": "Player",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "vrPolyfillScale": 0.73,
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "id": "rootPlayer",
 "data": {
  "name": "Player463"
 },
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "creationPolicy": "delayed",
 "paddingLeft": 0,
 "mobileMipmappingEnabled": false,
 "borderSize": 0,
 "minHeight": 20,
 "borderRadius": 0,
 "contentOpaque": false,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "scripts": {
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getKey": function(key){  return window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "registerKey": function(key, value){  window[key] = value; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "existsKey": function(key){  return key in window; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } }
 },
 "paddingTop": 0
})