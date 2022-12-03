import conn from "../database/connect.js";

class userControler {
  getAll(req, res) {
    conn.query("SELECT name, count(id_user) as count from docs group by name order by count DESC;", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result)
      }
    });
  }
  getOne(req, res) {
    const { id } = req.params;
    conn.query(
      "SELECT id, id_user as user, name FROM docs WHERE id_user = " + id,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      }
    );
  }
  add(req, res) {
    const { user, doc } = req.body;
    const query =
      "SELECT count(id) as count FROM `docs` WHERE id_user = " +
      user +
      " AND name = '" +
      doc +
      "'";
    conn.query(query, (err, response) => {
      if (err) {
        res.json({
          message: "Ошибка проверки документа",
          log: err.message,
          color: "#f00",
        });
      } else {
        if (response[0].count > 0)
          res.json({
            message: "Данный документ уже запрашивался",
            color: "#f00",
          });
        else {
          conn.query(
            "INSERT INTO `docs`(`id_user`, `name`) VALUES ('" +
              user +
              "','" +
              doc +
              "') ",
            (err, result) => {
              if (err) {
                res.json({
                  message: "Ошибка добаления документа",
                  log: err.message,
                  color: "#f00",
                });
              } else {
                res.json({ message: "Документ добавлен", color: "#0f0" });
              }
            }
          );
        }
      }
    });
  }
  delete(req, res) {
    const { id } = req.params;
    conn.query("DELETE FROM docs WHERE id = " + id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json("Документ удален");
      }
    });
  }
}
export default new userControler();
