/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
/* global console, window, dataLayer, CustomEvent */
(function() {
    'use strict';

    /* eslint no-console: "off" */
    /* eslint no-unused-vars: "off" */

    window.dataLayer = window.dataLayer || [];

    function populateDataLayerBefore() {

        dataLayer.push({
            'data': {
                'page': {
                    'id': '/content/mysite/en/products/crossfit',
                    'siteLanguage': 'en-us',
                    'siteCountry': 'US',
                    'pageType': 'product detail',
                    'pageName': 'pdp - crossfit zoom',
                    'pageCategory': 'womens > shoes > athletic'
                }
            }
        });

        dataLayer.push({
            'eventName': 'carousel clicked',
            'data': {
                'component': {
                    'carousel': {
                        'carousel3': {
                            'id': '/content/mysite/en/home/jcr:content/root/carousel3',
                            'items': {}
                        }
                    }
                }
            }
        });

        dataLayer.push({
            'eventName': 'tab viewed',
            'data': {
                'component': {
                    'tab': {
                        'tab2': {
                            'id': '/content/mysite/en/home/jcr:content/root/tab2',
                            'items': {}
                        }
                    }
                }
            },
            'info': {
                'title': 'some thing'
            }
        });

        dataLayer.push({
            'on': 'datalayer:change',
            'handler': function(event) {
                console.log('event listener triggered on: ', event[Object.keys(event)[0]]);
            }
        });

        dataLayer.push({
            'on': 'datalayer:event',
            'handler': function(event) {
                console.log('event listener triggered on: ', event[Object.keys(event)[0]]);
            }
        });

    }

    function populateDataLayerAfter() {

        dataLayer.push({
            'eventName': 'page updated',
            'data': {
                'page': {
                    'new prop': "I'm new",
                    'id': 'NEW/content/mysite/en/products/crossfit',
                    'siteLanguage': 'en-us',
                    'siteCountry': 'US',
                    'pageType': 'product detail',
                    'pageName': 'pdp - crossfit zoom',
                    'pageCategory': 'womens > shoes > athletic'
                }
            }
        });

        dataLayer.push({
            'eventName': 'component updated',
            'data': {
                'component': {
                    'image': {
                        'image4': {
                            'id': '/content/mysite/en/home/jcr:content/root/image4',
                            'items': {}
                        }
                    }
                }
            }
        });

        dataLayer.push({
            'eventName': 'removed',
            'data': {
                'component': {
                    'image': {
                        'image4': {
                            'id': '/content/mysite/en/home/jcr:content/root/image4',
                            'items': undefined
                        }
                    }
                }
            }
        });

        dataLayer.push({
            'on': 'removed',
            'handler': function(event) {
                console.log('event listener triggered on: ', event[Object.keys(event)[0]]);
            }
        });

    }

    // =========================================================================================

    //                                     BASIC USE CASES

    // =========================================================================================

    function basicUseCases() {

        // ====================================  Add data ======================================

        // Add the page data (automatically triggers the datalayer:change event)
        dataLayer.push({
            'data': {
                'page': {
                    'id': '/content/my-site/en/about-us',
                    'pageName': 'About Us',
                    'siteLanguage': 'en-us',
                    'siteCountry': 'US'
                }
            }
        });

        // Add a component
        dataLayer.push({
            'data': {
                'component': {
                    'tab': {
                        'tab2': {
                            'id': '/content/mysite/en/home/jcr:content/root/tab2',
                            'title': 'the ocean',
                            'items': {}
                        }
                    }
                }
            }
        });

        // Remove data
        dataLayer.push({
            'data': {
                'component': {
                    'image': {
                        'image5': undefined
                    }
                }
            }
        });

        // ====================================  Add event ======================================


        // Add an event (without data)
        dataLayer.push({
            'eventName': 'page loaded'
        });

        // Add an event with its data
        dataLayer.push({
            'eventName': 'image viewed',
            'data': {
                'component': {
                    'image': {
                        'image5': {
                            'id': '/content/mysite/en/home/jcr:content/root/image5',
                            'fileReference': '/content/dam/core-components-examples/library/sample-assets/lava-into-ocean.jpg'
                        }
                    }
                }
            }
        });

        // Add an event and remove data
        dataLayer.push({
            'eventName': 'removed',
            'data': {
                'component': {
                    'image': {
                        'image5': undefined
                    }
                }
            }
        });

        // Add event and reference the object by ID
        dataLayer.push({
            'eventName': 'image viewed',
            'info': {
                'id': '/content/mysite/en/home/jcr:content/root/image5'
            }
        });

        // Add an event with its data
        dataLayer.push({
            'eventName': 'image viewed',
            'info': {
                // any data (is not persisted in the state)
            },
            'data': {
                'component': {
                    'image': {
                        'image5': {
                            'id': '/content/mysite/en/home/jcr:content/root/image5',
                            'fileReference': '/content/dam/core-components-examples/library/sample-assets/lava-into-ocean.jpg'
                        }
                    }
                }
            }
        });

        // ====================================  Add event listener ======================================

        // Register event listener: retrieving the object that was referenced by ID in the event
        dataLayer.push({
            'on': 'image viewed',
            'handler': function(event) {
                var image = dataLayer.get(event.data.id); // TODO: implement dataLayer.get()
            }
        });

        // Register event listener listening on state change
        dataLayer.push({
            'on': 'datalayer:change',
            'handler': function(event) {
                // the event name
                console.log(event.event);
                // the data that changed
                console.log(event.data);
                // the state
                console.log(dataLayer.getState());
            }
        });

        // TODO: implement scope
        // TODO: implement selector
        // Register event listener listening on state change
        dataLayer.push({
            'on': 'datalayer:change',
            'scope': 'future', // Possible values: past, future, all, once
            'selector': 'user.userName',
            'handler': function(userName) {
                console.log(userName);
            }
        });

        // Register event listener listening on all events
        dataLayer.push({
            'on': 'datalayer:event',
            'handler': function(event) {
                console.log(event);
            }
        });

        // Unregister event listener
        dataLayer.push({
            'off': 'datalayer:change',
            'handler': function(event) {
                // the event name
                console.log(event.event);
                // the data that changed
                console.log(event.data);
                // the state
                console.log(dataLayer.getState());
            }
        });

    }

    populateDataLayerBefore();

    window.addEventListener('datalayer:ready', function() {
        console.log("data layer ready - let's populate some more events.");
        populateDataLayerAfter();
    });

    var event = new CustomEvent('datalayer:prepopulated');
    window.dispatchEvent(event);

})();
