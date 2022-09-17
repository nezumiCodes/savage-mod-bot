let error = false;

module.exports = config => {
    console.log('------------------ Config File Verification ------------------');
    if(!config.bot.token || config.bot.token.length === 0) {
        error = true;
        console.log('🟥 Error 1: No discord bot token provided');
    }

    if(!error) {
        console.log('------------------------------------------------------------');
        console.log('🟩 SAVAGE Bot Source System: Config file verified!');
        console.log('🟩 SAVAGE Bot Source System: Loading... ');
        console.log('🟩 SAVAGE Bot Source System: Copyright 2022 © SAVAGE - nezumiCodes');
        console.log('------------------------------------------------------------');
    }
    if(error) {
        console.log('------------------------------------------------------------');
        console.log('🟥 SAVAGE Bot Source System: Config File NOT verified!');
        console.log('🟥 SAVAGE Bot Source System: Stop...');
        console.log('🟥 SAVAGE Bot Source System: Copyright 2022 © SAVAGE - nezumiCodes');
        console.log('------------------------------------------------------------');
        return process.exit();
    }
}
