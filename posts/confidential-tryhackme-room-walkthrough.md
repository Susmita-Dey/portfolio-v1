---
title: Confidential - TryHackMe Room WalkThrough 🔐
description: Let's find the secret key. I'm back with another TryHackMe room walkthrough named "Confidential". It's a new room recently created by...
image: https://cdn.hashnode.com/res/hashnode/image/upload/v1660555557927/ROW4pb3cI.png
date: '2022-08-15'
tags: 
    - cybersecurity
    - tryhackme
---

Hello folks, I'm back with another TryHackMe room walkthrough named "Confidential". It's a new room recently created by [cmnatic](https://tryhackme.com/p/cmnatic). It's a pretty easy room but tricky.

Room Link:- https://tryhackme.com/room/confidential 

<iframe src="https://giphy.com/embed/XHX9s5YLavonUU4Cbr" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/SportsManias-sports-sportsmanias-here-we-go-XHX9s5YLavonUU4Cbr">via GIPHY</a></p>

As per the room: 
> We got our hands on a confidential case file from some self-declared "black hat hackers"... it looks like they have a secret invite code available within a QR code, but it's covered by some image in this PDF! If we want to thwart whatever it is they are planning, we need your help to uncover what that QR code says!

> Access this challenge by deploying the machine attached to this task by pressing the green "Start Machine" button. The file you need is located in **/home/ubuntu/confidential** on the VM.

You may check out similar type of room on TryHackMe: [Intro to digital forensics](https://tryhackme.com/room/introdigitalforensics)


### *Answer the questions below*

**Q. Uncover and scan the QR code to retrieve the flag!**

If you follow my approach then it would be pretty simple and also it's very much unintended. There are many ways to solve this question. One can be downloading the pdf file and extracting the qr code and decoding the image, etc. 

***My approach:***
I just started the attackbox and the machine attached to the room and then the opened the PDF file. Then I clicked on the text and dragged it to that folder which  created a new image file. After that I just opened it and scanned the proper QR code with my phone and just got the flag. Copied it and pasted into the answer and it's done. 

**Note:** I would recommend you to follow your own way of finding the flag before going with mine.

<iframe src="https://giphy.com/embed/69jFQEKHTFZZYRzjpY" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/CBSAllAccess-fight-good-the-69jFQEKHTFZZYRzjpY">via GIPHY</a></p>

---

Credits to [TryHackMe](https://tryhackme.com) and [cmnatic](https://tryhackme.com/p/cmnatic) for creating this beautiful room.

**Happy Hacking!** 😊

Check my profile on TryHackMe: https://tryhackme.com/p/Susmita.Dey

> Originally published at [Hashnode](https://susmitadey.hashnode.dev/confidential-tryhackme-room-walkthrough)

## Hope this helps you. Thank you for reading, and let's connect!
Thank you for reading my blog. Feel free to subscribe to my [YouTube Channel](https://www.youtube.com/channel/UCsuzc8lqAbgUYo4yzpjtfSw) and connect on [LinkedIn](https://www.linkedin.com/in/susmita-dey-15a15a210/) or [Twitter](https://twitter.com/its_SusmitaDey).
Also, feel free to [support](https://www.buymeacoffee.com/susmitadey) my work.😊

<a href="https://www.buymeacoffee.com/susmitadey" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 150px;width: 300px;" ></a>
