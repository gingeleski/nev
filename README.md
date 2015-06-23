# Nev
Vocal AI that makes phone conversations, opening with "Hi this is Nev from Catfish."

## Rundown
- Telephony is made possible via [Skype API](http://www.skype.com/en/developer/)
- Recipient's speech is converted to text via [Web Speech API](https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html)
- Text gets interpreted by Nev's logical code, which generates a text response
- Response gets converted to speech via [TTS-API](http://tts-api.com/)
- This loops and conversation ensues

At the moment, the logical code (dialog engine) is just ELIZA [1]. Specifically Norbert Landsteiner's [elizabot.js](http://www.masswerk.at/elizabot/) implementation from 2005. Credit to him.

References:
[1]	Weizenbaum, Joseph "ELIZA – A Computer Program For the Study of Natural Language Communication Between Man and Machine"
in: Communications of the ACM; Volume 9 , Issue 1 (January 1966): p 36-45.

***

<p align="center">
<img src="http://www.randygingeleski.com/wp-content/uploads/2015/06/catfish-nev.jpg">
</p>
