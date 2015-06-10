# Nev
Vocal AI that makes phone conversations, opening with "Hi this is Nev from Catfish."

## Rundown
- Telephony is made possible via [Skype API](http://www.skype.com/en/developer/)
- Recipient's speech is converted to text via [Web Speech API](https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html)
- Text gets interpreted by Nev's logical code, which generates a text response
- Response gets converted to speech and vocalized via [TTS-API](http://tts-api.com/)
- This loops and conversation ensues
