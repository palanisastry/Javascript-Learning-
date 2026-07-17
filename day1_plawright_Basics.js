1)	Playwritght Architecture
Test script->playwright api->browser communication -> result/application
Selenium Architecture
Test script->webdriver->w3c protocol->chrome/fire fox driver->application

2)	Difference between play wright and selenium
Playwright                                    Selenium
1)	Faster, no driver calling		   1) Slower – driver should call
2)	Auto synchronization                2) Explicit waits 
3)	More stable				    3) less stable
4)	Network interception                 4)  Limited	    
5)	Built in API  			        5) Required extensions support
6)	Parallel execution automatically 	 6) required testing
7)	Mobile emulation		  		    7) Limited
8)	Build in reports videos/ screen shots      8) Extensions extra support	

3)	Browser, browser context, page in playwright
Browser -> is represents by actual browser (chrome browser)
Browser context -> it maintains separated session, cookies, cache, storage.It opens incognito browsers
Chrome Browser
    |
    |-- User Session 1, cookies, cache, storage
    |
    |-- User Session 2,  cookies, cache, storage
Page -> it represents browser page


Eg- Browser  = Chrome Application

Context  = Incognito Window

Page     = Browser Tab

Explain purpose of a key playwright feature like the codegen tool or network 
Playwright Codegen is a record-and-generate tool that captures user actions and automatically generates Playwright scripts. It helps testers quickly create test scripts, identify stable locators, and accelerate automation development. However, the generated code should be optimized and integrated into a proper framework before production use.
Network interception allows Playwright to capture, monitor, modify, block, or mock network requests and responses. It is useful for validating API calls, testing error scenarios, mocking backend responses, and reducing dependency on external systems. This feature helps create stable and reliable end-to-end tests.

Shorter answer:-
One powerful Playwright feature is Codegen, which records user actions and automatically generates automation scripts, speeding up test development. Another key feature is Network Interception, which allows testers to capture, mock, or modify API requests and responses, enabling end-to-end testing even when backend services are unavailable.






																

