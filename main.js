
  var s = Snap('#snapImage');
  var elements = {};

  Snap.load("election.svg", function (loadedFragment) {
    elements.scales = loadedFragment.select('#scales');
    elements.tribune = loadedFragment.select('#tribune');
    elements.weight = loadedFragment.select('#weight');
    elements.weight5percent = loadedFragment.select('#weight5percent');
    elements.weight7percent = loadedFragment.select('#weight7percent');
    elements.rightScalepan = loadedFragment.select('#rightScalepan');
    elements.leftScalepan = loadedFragment.select('#leftScalepan');
    elements.scalesArrow = loadedFragment.select('#scalesArrow');
    elements.bigSeven = loadedFragment.select('#bigSeven');
    elements.firstText = loadedFragment.select('#firstText');
    elements.firstTextClip = loadedFragment.select('#firstTextClip rect');
    elements.secondText = loadedFragment.select('#secondText');
    elements.secondTextClip = loadedFragment.select('#secondTextClip rect');
    elements.thirdText = loadedFragment.select('#thirdText');
    elements.thirdTextClip = loadedFragment.select('#thirdTextClip rect');
    elements.magicShit = loadedFragment.select('#magicShit');
    elements.magicShitLine1 = loadedFragment.select('#magicShit path#line1');
    elements.magicShitLine2 = loadedFragment.select('#magicShit path#line2');
    elements.magicShitLine3 = loadedFragment.select('#magicShit path#line3');
    elements.magicShitLine4 = loadedFragment.select('#magicShit path#line4');
    elements.magicShitCircle1 = loadedFragment.select('#magicShit circle#circle1');
    elements.magicShitCircle2 = loadedFragment.select('#magicShit circle#circle2');
    elements.magicShitCircle3 = loadedFragment.select('#magicShit circle#circle3');
    elements.magicShitCircle4 = loadedFragment.select('#magicShit circle#circle4');
    elements.magicShitCircle5 = loadedFragment.select('#magicShit circle#circle5');
    elements.magicShitCircle6 = loadedFragment.select('#magicShit circle#circle6');
    elements.magicShitCircle7 = loadedFragment.select('#magicShit circle#circle7');
    elements.magicShitCircle8 = loadedFragment.select('#magicShit circle#circle8');
    elements.magicShitCircle9 = loadedFragment.select('#magicShit circle#circle9');
    elements.finalButton = loadedFragment.select('#finalButton');

    window.arrowMatrix = new Snap.Matrix(1, 0, 0, 1, 0, 0);
    window.arrowMatrix.rotate(45);

    s.append(loadedFragment);

    init();
  });

  function init () {
    elements.scales.animate({
      transform: 't50,0'
    }, 500, mina.easeOutCubic);

    setTimeout(function () {

        tribuneWiggle();

    }, 500);

    setTimeout(function () {
      elements.weight.animate({
        transform: 't0,0'
      }, 700, mina.easeInQuart, function () {
        elements.bigSeven.animate({
          transform: 't600,650'
        }, 1200, mina.easeOutQuad);

        elements.firstText.animate({
          transform: 't670,-100'
        }, 1200, mina.easeOutQuad);

        setTimeout(function () {
          elements.firstTextClip.animate({
            y: -35
          }, 600, mina.linear);
        }, 600);

        setTimeout(function () {
          elements.bigSeven.animate({
            transform: 't600, -100'
          }, 1200, mina.easeInQuad);

          setTimeout(function () {
            elements.firstText.animate({
              transform: 't670,-136'
            }, 400, mina.easeInQuad);

            elements.firstTextClip.animate({
              y: 5
            }, 400, mina.linear, function () {
              elements.secondText.animate({
                transform: 't670,280'
              }, 400, mina.easeInQuad);

              elements.secondTextClip.animate({
                y: -25
              }, 400, mina.linear, secondStep);
            });
          }, 400);
        }, 2000);

        elements.weight.animate({
          transform: 't0,20'
        }, 200, mina.easeInQuad, function () {
          elements.weight.animate({
            transform: 't0,-10'
          }, 200, mina.easeInQuad, function () {
            elements.weight.animate({
              transform: 't0,5'
            }, 200, mina.easeInQuad, function () {
              elements.weight.animate({
                transform: 't0,0'
              }, 200, mina.easeInQuad, function () {

              });
            });
          });
        });
        elements.scalesArrow.animate({
          transform: 'r-40,1298.7,380.1'
        }, 500, mina.elastic);
        elements.leftScalepan.animate({
          transform: 't0,20'
        }, 200, mina.easeInQuad, function () {
          elements.leftScalepan.animate({
            transform: 't0,-10'
          }, 200, mina.easeInQuad, function () {
            elements.leftScalepan.animate({
              transform: 't0,5'
            }, 200, mina.easeInQuad, function () {
              elements.leftScalepan.animate({
                transform: 't0,0'
              }, 200, mina.easeInQuad, function () {

              });
            });
          });

          elements.scalesArrow.animate({
            transform: 'r0,1298.7,380.1'
          }, 2000, mina.elastic);
        });
      });
    }, 650);
  }

  function secondStep () {
    setTimeout(function () {


      elements.weight.animate({
        transform: 't0,21 s0.8'
      }, 200, mina.easeInBack);

      tribuneWiggle();
      setTimeout(weightWiggle, 300);

      elements.magicShitLine4.attr({opacity: 1});
      elements.magicShitLine2.attr({opacity: 1});

      elements.magicShitLine4.animate({
        transform: 't-600,-570',
        opacity: 0
      }, 1500);

      elements.magicShitLine2.animate({
        transform: 't-1000,0',
        opacity: 0
      }, 1000);

      elements.magicShitCircle2.animate({
        opacity: 1
      }, 250, mina.linear, function () {
        elements.magicShitCircle2.animate({
          opacity: 0,
          r: 60
        }, 600, mina.linear, function () {
          elements.magicShitCircle5.animate({
            opacity: 1
          }, 1, mina.linear, function () {
            elements.magicShitCircle5.animate({
              opacity: 0,
              r: 60
            }, 400, mina.linear, function () {
              elements.magicShitCircle8.animate({
                opacity: 1
              }, 1, mina.linear, function () {
                elements.magicShitCircle8.animate({
                  opacity: 0,
                  r: 60
                }, 500, mina.linear);
              });
            });
          });
        });
      });

      elements.magicShitCircle3.animate({
        opacity: 1
      }, 400, mina.linear, function () {
        elements.magicShitCircle3.animate({
          opacity: 0,
          r: 60
        }, 620, mina.linear, function () {
          elements.magicShitCircle4.animate({
            opacity: 1
          }, 1, mina.linear, function () {
            elements.magicShitCircle4.animate({
              opacity: 0,
              r: 60
            }, 400, mina.linear, function () {
              elements.magicShitCircle7.animate({
                opacity: 1
              }, 1, mina.linear, function () {
                elements.magicShitCircle7.animate({
                  opacity: 0,
                  r: 60
                }, 300, mina.linear);
              });
            });
          });
        });
      });



      setTimeout(function () {

        elements.magicShitLine1.attr({opacity: 1});
        elements.magicShitLine3.attr({opacity: 1});

        elements.magicShitLine1.animate({
          transform: 't0,-450',
          opacity: 0
        }, 1500);

        elements.magicShitLine3.animate({
          transform: 't400,0',
          opacity: 0
        }, 1000);

        elements.magicShitCircle1.animate({
          opacity: 1
        }, 1, mina.linear, function () {
          elements.magicShitCircle1.animate({
            opacity: 0,
            r: 60
          }, 400, mina.linear, function () {
            elements.magicShitCircle6.animate({
              opacity: 1
            }, 1, mina.linear, function () {
              elements.magicShitCircle6.animate({
                opacity: 0,
                r: 60
              }, 600, mina.linear, function () {
                elements.magicShitCircle9.animate({
                  opacity: 1
                }, 1, mina.linear, function () {
                  elements.magicShitCircle9.animate({
                    opacity: 0,
                    r: 60
                  }, 340, mina.linear);
                });
              });
            });
          });
        });
      }, 50);
    }, 1500);
  }

  function tribuneWiggle () {
    elements.tribune.animate({
      transform: 't0,0'
    }, 300, mina.easeInQuart, function () {
      elements.tribune.animate({
        transform: 't0,20'
      }, 200, mina.easeInQuad, function () {
        elements.tribune.animate({
          transform: 't0,-10'
        }, 200, mina.easeInQuad, function () {
          elements.tribune.animate({
            transform: 't0,5'
          }, 200, mina.easeInQuad, function () {
            elements.tribune.animate({
              transform: 't0,0'
            }, 200, mina.easeInQuad, function () {

            });
          });
        });
      });


      elements.scalesArrow.animate({
        transform: 'r40,1298.7,380.1'
      }, 500, mina.elastic);
      elements.rightScalepan.animate({
        transform: 't0,20'
      }, 200, mina.easeInQuad, function () {
        elements.rightScalepan.animate({
          transform: 't0,-10'
        }, 200, mina.easeInQuad, function () {
          elements.rightScalepan.animate({
            transform: 't0,5'
          }, 200, mina.easeInQuad, function () {
            elements.rightScalepan.animate({
              transform: 't0,0'
            }, 200, mina.easeInQuad, function () {

            });
          });
        });
      });
    });
  }

  function weightWiggle() {
    elements.weight.animate({
      transform: 't0,0 s0.8'
    }, 200, mina.easeInQuad, function () {
      elements.weight.animate({
        transform: 't0,30 s0.8'
      }, 200, mina.easeInQuad, function () {
        elements.weight.animate({
          transform: 't0,15s0.8'
        }, 200, mina.easeInQuad, function () {
          elements.weight.animate({
            transform: 't0,21s0.8'
          }, 200, mina.easeInQuad, function () {

          });
        });
      });
    });
    elements.scalesArrow.animate({
      transform: 'r20,1298.7,380.1'
    }, 500, mina.elastic);
    elements.leftScalepan.animate({
      transform: 't0,-20'
    }, 200, mina.easeInQuad, function () {
      elements.leftScalepan.animate({
        transform: 't0,10'
      }, 200, mina.easeInQuad, function () {
        elements.leftScalepan.animate({
          transform: 't0,-5'
        }, 200, mina.easeInQuad, function () {
          elements.leftScalepan.animate({
            transform: 't0,0'
          }, 200, mina.easeInQuad, function () {
            elements.weight7percent.animate({
              transform: 't-110,0'
            }, 500);
            elements.weight5percent.animate({
              transform: 't0,0'
            }, 500)

            setTimeout(function () {
              elements.secondText.animate({
                transform: 't670,260'
              }, 200, mina.linear);
              elements.secondTextClip.animate({
                y: 10
              }, 200, mina.linear, function () {
                elements.thirdText.animate({
                  transform: 't0,0'
                }, 200, mina.linear);
                elements.thirdTextClip.animate({
                  y: -25
                }, 200, mina.linear, function () {
                  setTimeout(function () {
                    elements.finalButton.animate({
                      transform: 't68,-170 s1.5'
                    }, 800, mina.easeOutBack)
                  }, 2000)
                });
              });
            }, 3000);

          });
        });
      });

      elements.scalesArrow.animate({
        transform: 'r0,1298.7,380.1'
      }, 2000, mina.elastic);
    });
  }
