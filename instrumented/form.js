function cov_19hq84xnvz() {
  var path = "C:\\Development_Repo\\Cypress\\src\\form.js";
  var hash = "6644fda6890d3aa826be41cbd5b2764872c7e997";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Development_Repo\\Cypress\\src\\form.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 13
        },
        end: {
          line: 1,
          column: 30
        }
      },
      "1": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 6,
          column: 3
        }
      },
      "2": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 4,
          column: 25
        }
      },
      "3": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 5,
          column: 21
        }
      },
      "4": {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 18,
          column: 3
        }
      },
      "5": {
        start: {
          line: 9,
          column: 15
        },
        end: {
          line: 9,
          column: 59
        }
      },
      "6": {
        start: {
          line: 10,
          column: 19
        },
        end: {
          line: 10,
          column: 39
        }
      },
      "7": {
        start: {
          line: 11,
          column: 18
        },
        end: {
          line: 11,
          column: 38
        }
      },
      "8": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 12,
          column: 70
        }
      },
      "9": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 25
        }
      },
      "10": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 17,
          column: 4
        }
      },
      "11": {
        start: {
          line: 15,
          column: 25
        },
        end: {
          line: 15,
          column: 50
        }
      },
      "12": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 82
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 32
          },
          end: {
            line: 3,
            column: 33
          }
        },
        loc: {
          start: {
            line: 3,
            column: 43
          },
          end: {
            line: 6,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 8,
            column: 38
          },
          end: {
            line: 8,
            column: 39
          }
        },
        loc: {
          start: {
            line: 8,
            column: 49
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 8
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 14,
            column: 19
          },
          end: {
            line: 14,
            column: 20
          }
        },
        loc: {
          start: {
            line: 14,
            column: 31
          },
          end: {
            line: 17,
            column: 3
          }
        },
        line: 14
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6644fda6890d3aa826be41cbd5b2764872c7e997"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_19hq84xnvz = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_19hq84xnvz();
const form = (cov_19hq84xnvz().s[0]++, document.forms[0]);
cov_19hq84xnvz().s[1]++;
form.addEventListener("submit", event => {
  cov_19hq84xnvz().f[0]++;
  cov_19hq84xnvz().s[2]++;
  event.preventDefault();
  cov_19hq84xnvz().s[3]++;
  new FormData(form);
});
cov_19hq84xnvz().s[4]++;
document.addEventListener("formdata", event => {
  cov_19hq84xnvz().f[1]++;
  const body = (cov_19hq84xnvz().s[5]++, Object.fromEntries(event.formData.entries()));
  const jsonBody = (cov_19hq84xnvz().s[6]++, JSON.stringify(body));
  const request = (cov_19hq84xnvz().s[7]++, new XMLHttpRequest());
  cov_19hq84xnvz().s[8]++;
  request.open("POST", "https://jsonplaceholder.typicode.com/users/");
  cov_19hq84xnvz().s[9]++;
  request.send(jsonBody);
  cov_19hq84xnvz().s[10]++;

  request.onload = function () {
    cov_19hq84xnvz().f[2]++;
    const jsonResponse = (cov_19hq84xnvz().s[11]++, JSON.parse(this.response));
    cov_19hq84xnvz().s[12]++;
    document.body.innerHTML += `Response from the server: ${jsonResponse.status}`;
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiXSwibmFtZXMiOlsiZm9ybSIsImRvY3VtZW50IiwiZm9ybXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkZvcm1EYXRhIiwiYm9keSIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiZm9ybURhdGEiLCJlbnRyaWVzIiwianNvbkJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNlbmQiLCJvbmxvYWQiLCJqc29uUmVzcG9uc2UiLCJwYXJzZSIsInJlc3BvbnNlIiwiaW5uZXJIVE1MIiwic3RhdHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosTUFBTUEsSUFBSSw2QkFBR0MsUUFBUSxDQUFDQyxLQUFULENBQWUsQ0FBZixDQUFILENBQVY7O0FBRUFGLElBQUksQ0FBQ0csZ0JBQUwsQ0FBc0IsUUFBdEIsRUFBaUNDLEtBQUQsSUFBVztBQUFBO0FBQUE7QUFDekNBLEVBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUR5QztBQUV6QyxNQUFJQyxRQUFKLENBQWFOLElBQWI7QUFDRCxDQUhEOztBQUtBQyxRQUFRLENBQUNFLGdCQUFULENBQTBCLFVBQTFCLEVBQXVDQyxLQUFELElBQVc7QUFBQTtBQUMvQyxRQUFNRyxJQUFJLDZCQUFHQyxNQUFNLENBQUNDLFdBQVAsQ0FBbUJMLEtBQUssQ0FBQ00sUUFBTixDQUFlQyxPQUFmLEVBQW5CLENBQUgsQ0FBVjtBQUNBLFFBQU1DLFFBQVEsNkJBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxJQUFmLENBQUgsQ0FBZDtBQUNBLFFBQU1RLE9BQU8sNkJBQUcsSUFBSUMsY0FBSixFQUFILENBQWI7QUFIK0M7QUFJL0NELEVBQUFBLE9BQU8sQ0FBQ0UsSUFBUixDQUFhLE1BQWIsRUFBcUIsNkNBQXJCO0FBSitDO0FBSy9DRixFQUFBQSxPQUFPLENBQUNHLElBQVIsQ0FBYU4sUUFBYjtBQUwrQzs7QUFNL0NHLEVBQUFBLE9BQU8sQ0FBQ0ksTUFBUixHQUFpQixZQUFZO0FBQUE7QUFDM0IsVUFBTUMsWUFBWSw4QkFBR1AsSUFBSSxDQUFDUSxLQUFMLENBQVcsS0FBS0MsUUFBaEIsQ0FBSCxDQUFsQjtBQUQyQjtBQUUzQnJCLElBQUFBLFFBQVEsQ0FBQ00sSUFBVCxDQUFjZ0IsU0FBZCxJQUE0Qiw2QkFBNEJILFlBQVksQ0FBQ0ksTUFBTyxFQUE1RTtBQUNELEdBSEQ7QUFJRCxDQVZEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9ybSA9IGRvY3VtZW50LmZvcm1zWzBdO1xyXG5cclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb3JtZGF0YVwiLCAoZXZlbnQpID0+IHtcclxuICBjb25zdCBib2R5ID0gT2JqZWN0LmZyb21FbnRyaWVzKGV2ZW50LmZvcm1EYXRhLmVudHJpZXMoKSk7XHJcbiAgY29uc3QganNvbkJvZHkgPSBKU09OLnN0cmluZ2lmeShib2R5KTtcclxuICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgcmVxdWVzdC5vcGVuKFwiUE9TVFwiLCBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy9cIik7XHJcbiAgcmVxdWVzdC5zZW5kKGpzb25Cb2R5KTtcclxuICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGpzb25SZXNwb25zZSA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCArPSBgUmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyOiAke2pzb25SZXNwb25zZS5zdGF0dXN9YDtcclxuICB9O1xyXG59KTtcclxuIl19