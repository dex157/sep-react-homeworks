import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';


class OutboxMail extends PureComponent {
  render() {
    const { data, style, dataId } = this.props,
          mail = data.outbox.find(mail => (
              mail.id === dataId
              ));

          console.log(mail);
    return (
      <div className={style.container}>
            <>
                <p className="t-mail-to">To: <b>{mail.to}</b></p>
                <p className="t-mail-body">{mail.body}</p>
            </>
      </div>
    );
  }
}

export default withData(OutboxMail);