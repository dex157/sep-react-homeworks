import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';


class InboxMail extends PureComponent {
  render() {
    const { data, style, dataId } = this.props,
          mail = data.inbox.find(mail => (
              mail.id === dataId
              ));

    return (
      <div className={style.container}>
            <>
                <p className="t-mail-from">From: <b>{mail.from}</b></p>
                <p className="t-mail-body">{mail.body}</p>
            </>
      </div>
    );
  }
}

export default withData(InboxMail);
