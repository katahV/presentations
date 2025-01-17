# slide

A slide object used within a presentation.

### Properties

| Property | Details
| --- | ---
| baseMap | The basemap to be displayed on the slide.<br>See [baseMap properties](#basemap-properties) table.
| [description](description.md) | Text description of the individual presentation slide.
| [environment](environment.md) | Represents settings that affect the environment in which the web scene is displayed (such as lighting).
| id | The unique id of a slide within the slides property of a Presentation.
| [thumbnail](thumbnail.md) | Object contains a thumbnail image.
| [title](title.md) | Text for the title of the individual slide.
| [viewpoint](viewpoint.md) | The location or camera position from which to view the scene.
| [visibleLayers](visibleLayer.md) | An array of objects used to indicate the visible layers of the web scene.


### baseMap properties

| Property | Details
| --- | ---
| [baseMapLayers](baseMapLayer.md) | An array of baseMapLayer objects defining the basemaps used in the web scene.
| id | A unique identifying string for the basemap.
| title | Required string title for the basemap that can be used in a table of contents.
| transparency | The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.


### Example

```json
{
  "slides": [
    {
      "id": "slide_1",
      "title": {
        "text": "Slide 1"
      },
      "thumbnail": {
        "url": "data:image/jpeg;base64,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"
      },
      "description": {
        "text": "Slide description"
      },
      "baseMap": {
        "id": "14dbe3148a8-basemap0",
        "title": "Topographic",
        "baseMapLayers": [
          {
            "id": "World_Imagery_5014",
            "title": "World Imagery",
            "layerType": "ArcGISTiledMapServiceLayer",
            "visibility": true,
            "url": "http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
          }
        ],
        "transparency": 0
      },
      "viewpoint": {
        "scale": 7842272,
        "rotation": 150,
        "targetGeometry": {
          "x": -9823809,
          "y": 3564025,
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          },
          "z": -178
        },
        "camera": {
          "position": {
            "x": -9262417,
            "y": 4636067,
            "spatialReference": {
              "wkid": 102100,
              "latestWkid": 3857
            },
            "z": 1828454
          },
          "heading": 209,
          "tilt": 27
        }
      },
      "visibleLayers": [
        {
          "id": "14dbe316703-layer-4"
        }
      ],
      "environment": {
        "lighting": {
          "datetime": 1426426774000,
          "directShadows": true,
          "displayUTCOffset": -5
        }
      }
    }
  ]
}
```

