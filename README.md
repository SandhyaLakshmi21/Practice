# Practice
<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <table>
            <tr>
                <td>
                    <asp:Label ID="lblHeader" runat="server" Text="Employee Screen"></asp:Label>

                </td>
            </tr>
            <tr>
                <td>
                    <asp:Label ID="lblName" runat="server" Text="Name"></asp:Label>
                </td>
                <td>
                    <asp:TextBox ID="txtName" runat="server"></asp:TextBox>
                </td>
            </tr>

             <tr>
                <td>
                    <asp:Label ID="lblDOB" runat="server" Text="DOB"></asp:Label>
                </td>
                <td>
                    <asp:TextBox ID="txtDOB" runat="server"></asp:TextBox>
                </td>
            </tr>

              <tr>
                <td>
                    <asp:Label ID="lblGender" runat="server" Text="Gender"></asp:Label>
                </td>
                <td>
                  
                    <asp:RadioButton ID="rbtnMale"  CausesValidation="true" GroupName="1" runat="server" Text="Male" />
                    <asp:RadioButton ID="rbtnFemale" CausesValidation="true" GroupName="1" runat="server" Text="FeMale" />
                </td>
            </tr>

               <tr>
                <td>
                    <asp:Label ID="lblAddress" runat="server" Text="Address"></asp:Label>
                </td>
                <td>
                    <asp:TextBox ID="txtAddress" runat="server"></asp:TextBox>
                </td>
            </tr>

            <tr>
                <td>
                    <asp:Label ID="lblState" runat="server" Text="State"></asp:Label>

                </td>
                <td>
                    <asp:DropDownList ID="ddlState" AutoPostBack="false" runat="server"></asp:DropDownList>
                </td>
            </tr>

          <tr>
              <td colspan="2" align="center">
                
                  <asp:Button ID="btnSubmit" runat="server" Text="Button" OnClick="btnSubmit_Click" />
                
              </td>
          </tr>

        </table>
    
    </div>
    </form>
</body>
</html>

