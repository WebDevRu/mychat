import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button } from '@material-ui/core';
import VoiceChatIcon from '@material-ui/icons/VoiceChat';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = (props) => {
    const {
        currentChatInfo,
        chatId,
        onJoinUserToChat,
    } = props;

    return (
        <div className={styles.content}>
            <div className={styles.contentRow}>
                <div className={styles.avatarCont}>
                    <Avatar />
                </div>
                <div>
                    <p className={styles.chatName}>
                        {currentChatInfo.name}
                    </p>
                    <p className={styles.chatSubInfo}>
                        {`members${ currentChatInfo.participants?.length}`}
                    </p>
                </div>

                {console.log(currentChatInfo)}
                {!currentChatInfo?.isSubscribed ? (
                    <Button
                        className={styles.joinButton}
                        onClick={() => { onJoinUserToChat({ chatId }); }}
                    >
                        Subscribe
                    </Button>
                ) : (
                    <Link
                        to={`/conf/${chatId}`}
                        className={styles.chatIcon}
                    >
                        <VoiceChatIcon />
                    </Link>
                )}

            </div>
        </div>
    );
};

Navbar.propTypes = {
    currentChatInfo: PropTypes.object,
    chatId: PropTypes.string,
    onJoinUserToChat: PropTypes.func,
};

Navbar.defaultProps = {
    currentChatInfo: {},
    chatId: '',
    onJoinUserToChat: (f) => f,
};

export default React.memo(Navbar);
