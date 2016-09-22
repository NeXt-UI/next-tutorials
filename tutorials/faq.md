# FAQ
This article is to organize already existing answers to NeXt users' questions.

Ask your question: <next-dev@lists.opendaylight.org>

## General
* **What is NeXt for?**

    NeXt is a comprehensive JavaScript toolkit that allows you to visualize a network topology and create UI elements. It is a part of [OpenDaylight](https://opendaylight.org) project and is mostly maintained by [Cisco](https://cisco.com). However, the product is brand-free and is distributed on an open-source basis.

* **How is NeXt licensed?**

    NeXt is an open-source project and is a part of OpenDaylight project. Although most of OpenDaylight modules fall under Apache license, we chose to use **Eclipse Public License**.
    
* **How big is next.min.js and the entire package you distibute?**

    Minified JavaScript code is 569 KB, minified CSS is 111 KB, and the SVG font (we use it for icons) is 102 KB. That totals in 782 KB of minified code that you link to your HTML page. Normally, web-browsers cache static files after the first download. 
   
   The entire Bower-distributed package's size is 2.9 MB.
   
* **Can I contribute to the NeXt?**

    By all means! Any contribution will be highly appreciated and taken into consideration. There are a few ways to help the project.
    
    1. Report bugs, request features and give us feedback. The bug tracker is a part of OpenDaylight ecosystem: [OpenDaylight Bugzilla](https://bugs.opendaylight.org/buglist.cgi?bug_status=__open__&list_id=66545&product=next). It requires [registration](https://identity.opendaylight.org/carbon/user-registration/user-registration.jsp), which might be annoying for new users. In that case, please contact us at <next-dev@lists.opendaylight.org>
    2. Help us code. Please read the [Contributor's Guide](contributors-guide.md) to do so.
    3. Help us write. These tutorials are separate from OpenDaylight ecosystem and we chose GitHub to host them. We always strive to deliver the most valid and accurate content possible, but mistakes could occur. If you found one, or simply want to compose a new tutorial, please reach out to us at <next-dev@lists.opendaylight.org>, [open an issue](https://github.com/NeXt-UI/next-tutorials/issues) or [make a pull request](https://github.com/NeXt-UI/next-tutorials/pulls) on Github. We will appreacite any assistance provided.
   
## Topology
* **Can I adhere an icon to a node?**

    Yes, you can. See [the example on Codepen](https://codepen.io/NEXTSUPPORT/pen/PNVXvx)

* **Can I create different tooltips for nodes (links etc.) and hide the tooltips based on a specific parameter, such as "node type"?**

    Yes, you can. See [the example on Codepen](https://codepen.io/NEXTSUPPORT/pen/amBbBG)

TBD